## 📐 Architecture Diagrams (C4 Model)

### 🌍 C4 – Context Diagram

```mermaid
graph TD
  User --> WebApp
  WebApp --> API
  API --> Database
  API --> Inngest
  Inngest --> AIProvider
```

Shows the system at a high level and how it interacts with users and external services.

---

### 📦 C4 – Container Diagram

```mermaid
graph TD
  Browser --> NextJS
  NextJS --> ExpressAPI
  ExpressAPI --> Postgres
  ExpressAPI --> Inngest
  Inngest --> AIProvider
  Clerk --> NextJS
  Clerk --> ExpressAPI
```

Highlights the major runtime containers and responsibilities.

---

### 🧠 C4 – Component Diagram (Backend)

```mermaid
graph TD
  Routes --> Controllers
  Controllers --> Services
  Services --> Prisma
  Services --> InngestClient
  InngestClient --> AIProvider
```

Demonstrates separation of concerns inside the backend.

---

## 🔄 AI Workflow – Resume Generation

```mermaid
sequenceDiagram
  User->>Frontend: Click "Generate Resume"
  Frontend->>API: POST /resumes
  API->>Inngest: Trigger generate-resume event
  Inngest->>AI: Generate tailored resume
  AI-->>Inngest: Resume content
  Inngest->>Database: Save resume
```

The user does not wait for AI processing; results are handled asynchronously.

---

## 🔔 Clerk Webhook Flow

```mermaid
sequenceDiagram
  Clerk->>API: user.created webhook
  API->>Inngest: Trigger clerk-user-created
  Inngest->>Database: Create user record
```

This ensures user data is synchronized safely and reliably.
