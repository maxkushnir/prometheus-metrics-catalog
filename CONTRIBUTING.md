# Contributing to Prometheus Metrics Catalog

Thank you for contributing! Follow these steps to add metrics or improve the project.

## Process
1. Fork the repository.
2. Create a branch: `git checkout -b feature/add-mysql-metrics`
3. Make changes (e.g., add metrics to `/data/mysql-exporter.json`).
4. Commit with clear messages: `git commit -m "Add MySQL Exporter metrics"`
5. Submit a pull request.

## Adding Metrics
- Run `scripts/collect_metrics.py` to scrape metrics from an exporter’s `/metrics` endpoint.
- Alternatively, manually add JSON files to `/data/` with the format:
  ```json
  {
    "service": "MySQL",
    "exporter": "mysqld_exporter v0.15.0",
    "name": "mysql_up",
    "type": "gauge",
    "description": "Whether the MySQL server is up",
    "labels": [],
    "example": "mysql_up 1"
  }