Resume Intelligence API

A production-ready AI backend API that analyzes a resume against a job description and returns structured insights such as match score, strengths, missing skills, and improvement suggestions.

Built with a clean backend architecture, secure API key authentication, rate limiting, usage control, and an abstracted LLM layer for scalability.

🚀 Features

Resume vs Job Description analysis

AI-powered insights using Groq LLM

LLM provider abstraction (future-proof)

Secure API key authentication

Rate limiting & usage tracking

Hard usage limits (free tier)

Safe and structured AI response parsing

🏗️ Architecture
Client
→ API Key Authentication
→ Rate Limiting & Usage Control
→ Analyze Service
→ LLM Interface
→ Groq Provider
→ JSON Response

🔐 Authentication
Generate an API Key
POST https://resume-intelligence-api.onrender.com/api/apiKey

Use the API Key in Requests
Authorization: Bearer <API_KEY>

📌 API Endpoints
Analyze Resume
POST https://resume-intelligence-api.onrender.com/api/analyze

Request Body

{
"resumeText": "React developer with Node.js",
"jobDescription": "Frontend role with React and TypeScript"
}

Response

{
"matchScore": 70,
"strengths": ["React", "Node.js"],
"missingSkills": ["TypeScript"],
"suggestions": ["Add TypeScript experience"]
}

Usage Metrics
GET https://resume-intelligence-api.onrender.com/api/usage

Response

{
"requestsThisWindow": 3,
"totalUsed": 27,
"maxLimit": 100
}

🚦 Limits & Safety

Rate limit: 10 requests per minute per API key

Free tier limit: 100 total requests per API key

Global kill switch:

API_ENABLED=true | false

🛠️ Tech Stack

Node.js

TypeScript

Express

Groq LLM

▶️ Run Locally
npm install
npm run dev

Environment Variables
GROQ_API_KEY=your_key

📌 Notes

matchScore is a relative heuristic (0–100)

Business logic is fully isolated from AI providers

Designed with production safety and scalability in mind
