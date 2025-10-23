# Contributing to Prometheus Metrics Catalog

Thank you for contributing! This project uses a branch-based contribution flow with pull requests.

## Contribution Flow

### 1. Fork and Clone
1. Fork this repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/prometheus-metrics-catalog.git
   cd prometheus-metrics-catalog
   ```

### 2. Create a Feature Branch
```bash
git checkout -b feature/add-mysql-metrics
# or
git checkout -b fix/mobile-layout-issue
# or
git checkout -b docs/update-readme
```

### 3. Make Your Changes
- Add new metrics to `/src/data/services/`
- Fix bugs or improve existing features
- Update documentation
- Follow the existing code style and structure

### 4. Test Your Changes
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build the project
npm run build
```

### 5. Commit and Push
```bash
git add .
git commit -m "Add MySQL Exporter metrics with proper categorization"
git push origin feature/add-mysql-metrics
```

### 6. Create a Pull Request
1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your feature branch → main branch
4. Fill out the PR template with:
   - Description of changes
   - Testing performed
   - Screenshots (if UI changes)

## Adding New Metrics

### Method 1: Using the Script
```bash
python scripts/collect_metrics.py --exporter-url http://localhost:9100/metrics --service-name mysql
```

### Method 2: Manual Addition
Create a new JSON file in `/src/data/services/SERVICE_NAME/metrics.json`:

```json
[
  {
    "name": "mysql_up",
    "service": "mysql",
    "labels": [],
    "description": "Whether the MySQL server is up",
    "importance": "high",
    "type": "gauge",
    "example_usage": "mysql_up 1"
  }
]
```

Then update `/src/data/services.json` to include your service:

```json
{
  "name": "mysql",
  "displayName": "MySQL",
  "description": "MySQL database metrics",
  "path": "/data/services/mysql/metrics.json",
  "color": "blue",
  "exporter": {
    "name": "mysqld_exporter",
    "link": "https://github.com/prometheus/mysqld_exporter"
  }
}
```

## Code Style Guidelines

- Use consistent indentation (2 spaces)
- Follow existing naming conventions
- Add proper comments for complex logic
- Ensure mobile responsiveness for UI changes
- Test on both desktop and mobile viewports

## Review Process

1. **Automated Checks**: GitHub Actions will validate your PR
2. **Code Review**: Maintainers will review your changes
3. **Merge**: Once approved, your PR will be merged to main
4. **Deployment**: GitHub Pages will automatically deploy the changes

## Getting Help

- Open an issue for questions or bug reports
- Check existing issues before creating new ones
- Be specific and provide reproduction steps

Thank you for contributing! 🚀