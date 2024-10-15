const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const pdfParse = require('pdf-parse');


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
        cb(null, 'uploads/');
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
    // console.log(role);

    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    const filePath = path.join(__dirname, 'uploads', req.file.filename);

    try {
        const extractedText = await extractTextFromPdf(filePath);

        // Clean up the uploaded file after extraction if desired
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

        const response = result?.messages?.[0]?.content || "No response received.";
        console.log('_______________')
        console.log("Generated Response:",result.response.text());

        // Process the response for analysis and suggestions
        // const responseText = result?.messages?.[0]?.content || "No response received."; // Get the response text
        // const analysis = { score: 85, strengths: [], areasOfImprovement: [] }; // Example mock analysis
        // const suggestions = responseText.split('\n'); // Split response into suggestions



        // Respond with the formatted message
        res.status(200).json({
            messages: [
                {
                    role: "user", // or "user", depending on context
                    content: {
                        analysis: analysis,
                        suggestions: suggestions,
                    }
                }
            ]
        });
    } catch (error) {
        console.error('Error during analysis:', error);
        res.status(500).send('Error analyzing resume: ' + error.message);
    }
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
