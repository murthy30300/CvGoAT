# AI-Powered Resume Analyzer 🌟

An intelligent **Node.js-based** resume analysis tool designed to help job seekers optimize their resumes for Applicant Tracking Systems (ATS) and improve their chances of landing interviews.

📌 This tool helps job seekers **increase interview chances** by tailoring resumes to match job descriptions and ATS systems used by top companies.

## 🚀 Features

✅ **Resume Text Extraction** - Seamlessly extracts content from PDF resumes  
✅ **Job Description Analysis** - Compares resume content against specific job requirements  
✅ **ATS Score Optimization** - Provides actionable insights to improve ATS compatibility  
✅ **Smart Recommendations** - Highlights strengths and identifies areas for improvement  
✅ **AI-Powered Insights** - Leverages cutting-edge AI for accurate and impactful analysis  
✅ **User-Friendly Interface** - Clean, intuitive React-based frontend  

## 🛠️ Tech Stack

- **Frontend:** React.js (component-based architecture, state management, reusable components)  
- **Backend:** Node.js (RESTful APIs, scalable architecture)  
- **File Upload:** Multer  
- **AI Engine:** Google Generative AI  
- **PDF Processing:** PDF parsing libraries  
- **Future Scope:** MongoDB for storing analysis history and user data  

## 🎥 Demo


Watch the live demo here:  
[![AI Resume Analyzer Demo](https://img.shields.io/badge/▶%20Watch%20Demo-LinkedIn-blue)](https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7265647081271226368)

*A sample view of the Resume Analyzer dashboard (upload → analyze → insights).*  

## 📋 Prerequisites

Before you begin, ensure you have the following installed:  
- Node.js (v14 or higher)  
- npm or yarn package manager  
- Google Generative AI API key  

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-resume-analyzer.git
   cd ai-resume-analyzer
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   NODE_ENV=development
   ```

## 🚀 Usage

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend application**
   ```bash
   cd frontend
   npm start
   ```

3. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📖 How It Works

1. **Upload Resume** - Users upload their PDF resume through the web interface  
2. **Job Description Input** - Paste or type the target job description  
3. **AI Analysis** - The system uses Google Generative AI to analyze compatibility  
4. **Results Dashboard** - View detailed insights including:  
   - ATS compatibility score  
   - Keyword match analysis  
   - Strengths identification  
   - Areas for improvement  
   - Tailored recommendations  

## 📁 Project Structure

```
ai-resume-analyzer/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
└── README.md
```

## 🔑 API Endpoints

- `POST /api/upload` - Upload resume file  
- `POST /api/analyze` - Analyze resume against job description  
- `GET /api/results/:id` - Retrieve analysis results  

## 🔮 Future Enhancements

- Store analysis results in **MongoDB** for user history  
- Add **LinkedIn job description auto-import**  
- Multi-language resume support  
- Deploy on **AWS/GCP** for global access  

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Generative AI for powering the intelligent analysis  
- The open-source community for the amazing tools and libraries  
- Job seekers everywhere who inspired this project  

## 📞 Contact

- Portfolio: [vishnunukala.me](https://vishnunukala.me)  
- LinkedIn: [linkedin.com/in/vishnu1702](https://linkedin.com/in/vishnu1702)  
- GitHub: [github.com/murthy30300](https://github.com/murthy30300)  

**Project Tags:** #Nodejs #ArtificialIntelligence #ResumeAnalyzer #AIProjects #ATSOptimization  

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
