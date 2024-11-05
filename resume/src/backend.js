const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const pdfParse = require('pdf-parse');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create 'uploads' folder if it doesn't exist
const uploadPath = path.join(__dirname, '/uploads/');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

async function extractTextFromPdf(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(fileBuffer);
    return data.text; // This will extract the text from the PDF
}

let role = "";

app.post('/upload', upload.single('resume'), async (req, res) => {
    role = req.body.role;

    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    const filePath = path.join(__dirname, 'uploads', req.file.filename);

    try {
        const extractedText = await extractTextFromPdf(filePath);
        
        // Clean up the uploaded file after extraction
        fs.unlinkSync(filePath);

        res.status(200).json({ text: extractedText });
    } catch (error) {
        console.error('Error extracting text from PDF:', error);
        res.status(500).send('Error extracting text from the PDF');
    }
});

app.post('/analyze', async (req, res) => {
    const text = req.body.text;

    // Initialize the Google Generative AI model with a valid API key
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        // Prepare the prompt for analysis
        const prompt = `I have attached my resume, what is the current ATS score? I am a fresher applying for a ${role}. Help me to increase the ATS score to 85+ by optimizing structure and format without adding new experiences or data. Conclude the analysis with strengths and areas of improvement. Analyze the following resume:\n\n${text}`;
     
        // Generate content using the model
        const result = await model.generateContent(prompt);
        console.log(result.response.text());

        const response = result.response.text();
        console.log('_______________');
        console.log("Generated Response:", response);

        // Respond with the generated analysis
        res.status(200).json({ analysis: response });
    } catch (error) {
        console.error('Error during analysis:', error);
        res.status(500).send('Error analyzing resume: ' + error.message);
    }
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
