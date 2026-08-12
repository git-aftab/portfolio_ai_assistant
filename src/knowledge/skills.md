## Skills: Md Aftab Ansari — Technical Skill Profile

**One-line summary:** Backend-leaning full-stack developer specializing in Node.js/Express APIs and applied AI engineering (RAG, vector search, LLM integration), with growing frontend and DevOps range. ~2 years into a self-taught engineering journey, validated through freelance client work and production-style personal projects.

### Backend Development
Node.js, Express.js — REST API design, middleware architecture, MVC and service-layer patterns, JWT auth (access/refresh token rotation), RBAC, file uploads, background job processing, caching strategies, centralized error handling.
*Proof: Project Camp (RBAC + JWT), VideoTube (refresh rotation + BullMQ workers), OrgMemory (multi-tenant JWT + Zod validation).*

### Databases
MongoDB (Mongoose, schema design, aggregation pipelines, indexing) and PostgreSQL via Supabase, including `pgvector` for hybrid vector + relational queries. Comfortable with query optimization, pagination, and search system design across both relational and NoSQL models.
*Proof: MongoDB in Project Camp/VideoTube; Supabase/pgvector in OrgMemory.*

### AI Engineering (core specialization)
Retrieval-Augmented Generation (RAG) built from scratch without LangChain — including hybrid dense + BM25/keyword retrieval, query expansion, re-ranking, MMR diversification, and confidence-gated hallucination prevention. Embedding models and vector search (Qdrant, Supabase pgvector, Xenova Transformers). LLM integration via Groq (Whisper transcription + inference) and OpenRouter/OpenAI. Prompt engineering for production RAG pipelines.
*Proof: VideoTube (Groq Whisper → Jina embeddings → Qdrant), OrgMemory (6-stage hybrid pipeline with confidence gating).*

### Frontend Development
React (function components, hooks), TypeScript (adopting), Tailwind CSS, Vite, React Router, TanStack React Query for server-state management, Axios. Component-based architecture and responsive UI, generally paired with a backend-first API design approach.
*Proof: React/TS in VideoTube; React Query + Vite in Project Camp; React 18 in OrgMemory.*

### Cloud & Deployment
Deployment and production config on Render, Vercel, and Railway. Cloudinary for media asset management. Environment-variable-based config separation across dev/prod. Git/GitHub-based workflows including CI/CD fundamentals.

### Tools
Git, GitHub, Postman, VS Code, Linux (Ubuntu 24), npm.

### Currently Deepening
TypeScript, Redis, BullMQ, Docker, Kubernetes, advanced system design, agentic AI systems (LangGraph), distributed architectures, DevOps practices.

### Working Style
Self-taught with a strong bias toward building real, production-style projects over tutorials — deliberately engineers realistic failure scenarios (e.g. Git conflict/recovery practice, OOM debugging) to build production instincts rather than relying on happy-path tutorials.