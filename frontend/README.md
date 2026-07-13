# Briefly Web

React + TypeScript frontend for Briefly, a RAG-based research brief assistant.

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Axios + TanStack Query

## Requirements

- Node.js 20+

## Setup

```bash
npm install
```

Environment variables are read from the `.env` file at the repo root (see `.env.example`).

## Development

```bash
npm run dev            # run the dev server at http://localhost:5173
npm run build          # type-check and build for production
npm run lint           # run eslint
npm run format         # run prettier
npm run format:check   # check formatting without writing
npm run typecheck      # run tsc
```
