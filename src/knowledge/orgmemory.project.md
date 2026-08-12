## Project: OrgMemory AI — Enterprise Hybrid RAG System

**One-line summary:** A production-ready, multi-tenant RAG platform for organizations to ingest internal knowledge (PDFs, Notion, manual entries) and query it through a 6-stage hybrid retrieval pipeline with confidence gating to prevent hallucinations.

**Type:** Full-stack SaaS-style application (Backend API + Frontend SPA)

### Backend Stack
- Node.js, Express.js
- Supabase with `pgvector` (vector search + relational data: docs, chunks, users)
- Auth: JWT + bcryptjs, multi-tenant isolation via `org_id`
- Validation: Zod schemas across all endpoints
- LLM/Embeddings: OpenAI / OpenRouter (interchangeable)
- Notion API integration for live sync

### Frontend Stack
- React 18, Vite, Tailwind CSS

### Hybrid RAG Pipeline (6 stages)
1. Metadata SQL pre-filtering (language + tags)
2. `pgvector` cosine similarity search
3. LLM query expansion (3 alternate phrasings per question)
4. Hybrid re-ranking (semantic score + tag bonus + keyword hits + variant hit bonuses)
5. MMR (Maximal Marginal Relevance) diversification
6. Confidence gating — thresholds queries below a confidence score to block hallucinated answers

This is a notably more sophisticated retrieval design than standard single-pass vector search — combines structured pre-filtering, semantic + lexical re-ranking, and an explicit hallucination gate rather than relying on embedding similarity alone.

### Core Features
- Multi-tenant enterprise auth with per-organization data isolation
- Multi-source ingestion: PDF parsing, live Notion database/page sync, manual text entry
- Retrieval Debugger Panel — real-time inspection of query expansion, retrieved candidates, tag matches, and latency
- Production-configured deployment (Render backend, Vercel frontend)

### Architecture
React (Vite/Tailwind) ↔ Express API (JWT + Zod validation) ↔ Supabase/pgvector (documents, chunks, users), with the API also calling out to OpenAI/OpenRouter for LLM + embeddings and the Notion API for sync.

### Notable Design Decisions
- Uses `pgvector` inside Supabase (Postgres) rather than a dedicated vector DB — keeps relational and vector data co-located, simplifying multi-tenant queries and joins across documents/chunks/users
- LLM query expansion before retrieval — generates alternate phrasings to widen recall before re-ranking narrows it back down
- Confidence gating as an explicit, separate pipeline stage rather than a prompt-level instruction — makes hallucination prevention a structural guarantee, not just a suggestion to the LLM
- Debugger panel exposes internal retrieval mechanics (candidates, tag matches, latency) — built for transparency/observability, not just end-user query answering

### Why It Matters (for recruiter/client framing)
Demonstrates enterprise-grade RAG system design beyond basic retrieval: multi-tenancy, structured accuracy pipeline with explicit hallucination gating, and observability tooling — closer to how RAG is built for real production knowledge bases than a typical tutorial implementation.