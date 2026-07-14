# Roadmap

## Phase 1 — Project Skeleton

- [x] Set up repository structure
- [x] Add FastAPI backend
- [x] Add Vite React frontend
- [x] Connect frontend to backend health endpoint
- [x] Add base README and roadmap

## Phase 2 — Mock Brief UI

- [ ] Add nav bar and empty-state search screen (question input, suggested prompts)
- [ ] Add mocked research brief generation flow (idle → generating → ready)
- [ ] Render TL;DR card and key concepts
- [ ] Render claim → evidence → source table
- [ ] Render sources sidebar

## Phase 3 — OpenAlex Import

- [ ] Add OpenAlex client
- [ ] Search papers by research question
- [ ] Normalize paper data
- [ ] Render paper cards in UI
- [ ] Add source detail drawer

## Phase 4 — Persistence

- [ ] Add PostgreSQL
- [ ] Add topics table
- [ ] Add papers table
- [ ] Persist imported papers
- [ ] Add client-side routing
- [ ] Add brief history view
- [ ] Add not-found state for deleted/invalid brief

## Phase 5 — LLM and RAG

- [ ] Add LLM client
- [ ] Add structured output schema
- [ ] Generate embeddings
- [ ] Add semantic search
- [ ] Generate source-grounded answers
- [ ] Generate structured research brief
- [ ] Add follow-up chat scoped to brief sources
- [ ] Add error state for failed brief generation

## Phase 6 — Portfolio Polish

- [ ] Add Markdown export
- [ ] Add basic retrieval evaluation
- [ ] Add screenshots
- [ ] Finalize README