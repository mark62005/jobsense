# JobSense

An intelligent job board that helps candidates prepare the right resume for the right role.

> A production‑ready, AI‑powered job board that allows users to discover jobs and generate tailor‑made resumes using modern fullstack technologies and scalable cloud infrastructure.

---

## 📌 Overview

**JobSense** is a fullstack, production-oriented job board application designed to help job seekers make smarter application decisions.

Instead of generating generic resumes, JobSense focuses on **role-specific preparation** — allowing users to understand job requirements and generate resumes tailored to individual roles.

This project is intentionally scoped and documented to demonstrate **real-world engineering practices** suitable for **junior–mid level software engineering interviews**, including architecture design, async workflows, authentication, and cloud deployment.

---

## 🧰 Tech Stack

### Frontend

- **Next.js (App Router)**
- TypeScript
- Tailwind CSS
- Clerk Authentication

### Backend

- **Express.js**
- TypeScript
- Prisma ORM
- PostgreSQL

### AI & Async Processing

- **Inngest** (background workflows)
- AI provider (e.g. OpenAI)

### Infrastructure

- AWS (Amplify, ECS / EC2, RDS)
- Docker
- GitHub Actions (CI/CD)

---

## 🏗 High‑Level Architecture

```
User Browser
     ↓
Next.js Frontend
     ↓
Express API
     ├── PostgreSQL (RDS)
     ├── Inngest (Async Jobs)
     └── AI Provider
```

The frontend handles UI and authentication, while the backend manages business logic, persistence, and AI orchestration.

---

## 📁 Project Structure

```
ai-jobboard/
├── client/                 # Next.js frontend
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── middleware.ts
│
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── inngest/
│   │   ├── middlewares/
│   │   └── config/
│   ├── prisma/
│   └── dist/
│
├── .gitignore
└── ARCHITECTURE.md
└── CONTRIBUTING.md
└── DEPLOYMENT.md
└── README.md
```

---

## 🔐 Authentication & Security

- Authentication is handled by **Clerk**
- Frontend uses Clerk SDK for session handling
- Backend verifies Clerk JWTs on protected routes
- User identity is never trusted directly from the client
- Clerk webhooks are verified using signing secrets

This removes password handling from the application while maintaining enterprise‑grade security.

---

## 🤖 AI & Async Workflows

### Why async processing?

AI operations are:

- Slow
- Expensive
- Failure‑prone

All AI‑related logic is handled asynchronously using **Inngest**, keeping HTTP requests fast and reliable.

---

## 🤔 Why These Decisions?

### Why Next.js?

- SEO‑friendly for job listings
- Server Components reduce client bundle size
- Widely adopted industry standard

### Why Express instead of full serverless?

- Clear separation of concerns
- Easier debugging for junior developers
- Predictable behavior and cost early on

### Why Clerk?

- Removes auth complexity
- Secure by default
- Faster development without sacrificing safety

### Why Inngest?

- Keeps AI off the request path
- Built‑in retries and observability
- Designed for long‑running workflows

### Why PostgreSQL?

- Strong relational guarantees
- Excellent Prisma support
- Proven in production at scale

---

## 🚧 Future Improvements

- Resume versioning
- AI job‑resume matching scores
- Role‑based access (admin / company accounts)
- Redis caching
- AI request throttling and cost controls

---

## 🎯 Final Note

This project demonstrates:

- Real‑world architectural decision making
- Async system design
- Secure authentication practices
- Cloud‑ready deployment thinking
- Clean separation of concerns

It is intentionally scoped and structured to communicate **engineering maturity** during junior–mid level interviews.
