# Prometheus Metrics Catalog

A centralized catalog of Prometheus metrics for popular services and technologies, built with Python, FastAPI, React, and SQLite. Contribute by adding metrics or exporters!

## Objectives
- Aggregate metrics from Prometheus exporters (e.g., Node Exporter, MySQL Exporter).
- Provide metric names, types, descriptions, labels, and examples.
- Support browsing via a web UI and querying via a REST API.

## Setup
1. Clone the repo: `git clone https://github.com/<your-username>/prometheus-metrics-catalog`
2. Install dependencies: `pip install -r requirements.txt`
3. Run collection script: `python scripts/collect_metrics.py`
4. Start backend: `uvicorn backend.main:app --reload`
5. Deploy frontend: `cd frontend && npm install && npm run build`

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License
MIT
