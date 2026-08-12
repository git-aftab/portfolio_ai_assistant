## Project: VideoTube — AI-Powered Video Platform

**One-line summary:** A production-grade, YouTube-inspired video platform combining full social/media features with an AI pipeline for transcript-based semantic search, Q&A, and summarization via RAG — built to go deep on real-world backend architecture rather than tutorial-style CRUD.

**Type:** Full-stack web application (Backend API + Frontend SPA)

**Repository:** github.com/git-aftab/videoTube

### Backend Stack
- Node.js, Express.js, MongoDB Atlas + Mongoose
- Auth: JWT (access + refresh tokens, rotation), Passport.js, Google OAuth
- Media: Cloudinary, Multer, FFmpeg (audio extraction)
- Caching/Queues: Redis, BullMQ (async workers)
- Email: Nodemailer + Mailtrap (dev)

### AI/RAG Stack
- Groq Whisper (speech-to-text transcription)
- Jina AI (embeddings)
- Qdrant (vector database)
- Custom RAG pipeline (no LangChain)

### Frontend Stack
- React + TypeScript, Vite, Tailwind CSS, React Router

### AI Pipeline (async, worker-driven)
Video Upload → Cloudinary Storage → FFmpeg audio extraction → Groq Whisper transcription → Jina embeddings → Qdrant vector storage → RAG endpoints (search / Q&A / summarization)

RAG retrieves relevant transcript segments as grounding context rather than answering from model knowledge alone — improves factual accuracy, reduces hallucination. Enables natural-language interaction with video content instead of keyword-only search.

### Core Features
- Full auth: registration, login, multi-device sessions, refresh token rotation, protected routes, Google OAuth
- Email verification + password reset with token expiration handling
- Media pipeline: video/thumbnail/avatar/cover uploads with validation and lifecycle management
- Discovery: search, sort, filter, pagination, personalized feed
- Social layer: comments, likes, playlists, subscriptions, watch history, channels, community posts (tweets)
- AI layer: video summarization, semantic search, transcript Q&A

### Architecture
Modular backend: routes → controllers → middleware → validators → services → models → utilities → workers (clean separation for maintainability/testability). BullMQ offloads audio extraction, transcription, embedding generation, and indexing so heavy AI work never blocks user-facing requests.

### Engineering Challenges Solved
- Secure refresh token rotation + multi-device session consistency
- Keeping cloud storage (Cloudinary) and DB state consistent during large video uploads
- Coordinating a multi-stage async AI pipeline (transcription → embedding → vector storage → retrieval) across independent workers
- Redis caching strategy for trending/popular content and frequently accessed metadata to reduce DB load

### Why It Matters (for recruiter/client framing)
Represents a deliberate shift from CRUD-tutorial projects to production-oriented engineering — demonstrates hands-on experience with queue-based processing, vector databases, RAG system design, and coordinating multiple external services (Cloudinary, Groq, Jina, Qdrant) in one cohesive async architecture.