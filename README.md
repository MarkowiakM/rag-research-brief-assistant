# Briefly — RAG-based Research Brief Assistant

Briefly turns a research question into a structured, source-grounded research brief using public academic metadata.

## Problem

Finding papers is easy. Understanding what the literature says, which claims are supported by which sources, and what to read first is harder.

## Solution

Briefly helps users explore a research question by organizing relevant academic sources into a structured brief with citations.

## Planned Features

- Import academic papers from OpenAlex
- Store paper metadata and abstracts
- Generate embeddings
- Semantic search with pgvector
- Generate structured research briefs
- Evidence table with sources
- Follow-up questions scoped to a paper collection
- Markdown export
- Basic retrieval evaluation

## Tech Stack

- React + TypeScript + Vite
- FastAPI
- PostgreSQL
- pgvector
- OpenAI API
- OpenAlex API

## Project Status

This repository currently contains the initial project skeleton. The first PR focuses on setup, structure, and local frontend-backend connectivity.

## Roadmap

See [ROADMAP.md](./ROADMAP.md).