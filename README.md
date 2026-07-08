# Smart Habit Tracker

> [Live Demo → smart-habbit-tracker (Vercel)](https://smart-habbit-tracker-omega.vercel.app/)

A modern habit-tracking web app with AI-powered habit suggestions, weekly insights, streak recovery planning, and rich visualizations. Built as a full-stack monorepo (React + Node/Express + MongoDB). Designed for personal productivity and to demonstrate hands-on skills in building, deploying, and securing production-ready web applications.

**Highlights**

- **AI features:** Personalized habit suggestions and weekly summaries powered by Google Gemini (configurable via `GEMINI_API_KEY`).
- **Data-driven UI:** Interactive charts and heatmaps to track progress and streaks.
- **Monorepo:** Frontend (Vite + React) and backend (Node/Express + Mongoose) in a single repository for easy deployment.
- **Production-ready:** Deployed backend on Render and frontend on Vercel with environment-based configuration.

**Role & Responsibilities (Resume Bullet Points)**

- Built and deployed a full-stack habit tracker with AI-driven features and real-time charts.
- Implemented RESTful API, authentication, and persistent storage with MongoDB.
- Integrated GenAI model for natural-language habit analysis and personalized suggestions.
- Automated seeding and local/dev workflows; configured CI/CD deployments to Render & Vercel.

**Tech Stack**

- Frontend: React, Vite, Recharts, Tailwind CSS
- Backend: Node.js, Express, Mongoose (MongoDB)
- AI: Google GenAI (Gemini) integration
- Deployment: Vercel (frontend), Render (backend)

**Quick Start (Local)**

Prerequisites: Node.js 18+, npm, MongoDB (Atlas or local)

1. Clone the repo and install dependencies:

```bash
git clone https://github.com/Thanishalva/smart_habbit_tracker.git
cd smart_habbit_tracker
```

2. Backend setup

````bash

# Smart Habit Tracker

> Live demo: https://smart-habbit-tracker-omega.vercel.app/

Smart Habit Tracker is a full-stack habit-tracking application with AI-powered suggestions, weekly insights, streak recovery tools, and interactive visualizations. The project is organized as a monorepo with a Vite/React frontend and a Node/Express backend backed by MongoDB.

**Highlights**
- **AI:** Google Gemini powers natural-language habit suggestions and weekly summaries (configurable via `GEMINI_API_KEY`).
- **Visualizations:** Heatmaps, bar charts, and streak cards for actionable insights.
- **Auth & Storage:** JWT authentication with persistent data in MongoDB (Mongoose).
- **Deployments:** Frontend hosted on Vercel, backend hosted on Render with environment-based configuration.

**Resume-friendly bullets**
- Built a production-ready full-stack app (React + Node + MongoDB) with AI-driven features.
- Designed REST APIs, authentication, and persistent data models; deployed via Render and Vercel.
- Integrated Google GenAI (Gemini) for personalized habit recommendations and automated reports.

**Quick Start (Local)**

Prereqs: Node.js 18+, npm, MongoDB (Atlas or local)

1) Clone and set up:

```bash
git clone https://github.com/Thanishalva/smart_habbit_tracker.git
cd smart_habbit_tracker
````

2. Backend (local dev):

```bash
cd backend
npm install
# create .env (do NOT commit) — see backend/.env.example
npm run seed   # optional: seed demo data
npm run dev    # starts backend with nodemon
```

3. Frontend (local dev):

```bash
cd frontend/ai-habit-tracker-ui-boilerplate-code
npm install
npm run dev
# open http://localhost:5173
```

**Environment variables (production)**

- Backend (Render service environment): `MONGO_URI`, `JWT_SECRET`, `GEMINI_API_KEY`, `GEMINI_MODEL`, `CLIENT_URL`.
- Frontend (Vercel environment): `VITE_API_URL` (e.g. `https://<render-backend>/api`).

Important: To restore AI features after rotating keys, update Render's environment variables: set `GEMINI_API_KEY` to the new key and ensure `GEMINI_MODEL=gemini-2.5-flash`, then redeploy the service.

**Health checks**

- GET `/api/health` on the backend should return `{ "status": "ok" }` when the service is healthy.

**Security notes**

- Never commit `.env` or secrets. Rotate any exposed keys immediately (Google API keys, DB credentials).
- Restrict MongoDB Atlas network access to required hosts or Render's outbound IPs.

**Links**

- Repository: https://github.com/Thanishalva/smart_habbit_tracker
- Live demo: https://smart-habbit-tracker-omega.vercel.app/

---

Need help pushing this update to GitHub or adding a short GIF walkthrough and simple architecture SVG? I can do either next.
