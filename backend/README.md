# Briefly API

FastAPI backend for Briefly, a RAG-based research brief assistant.

## Requirements

- Python 3.10+
- [uv](https://docs.astral.sh/uv/)

## Setup

```bash
uv sync
```

## Development

```bash
make dev     # run the dev server at http://localhost:8000
make test    # run tests
make lint    # run ruff check
make format  # run ruff format
make typecheck  # run mypy
make check   # run format, lint, typecheck and test
```
