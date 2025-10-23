# Prometheus Metrics Catalog

A modern, responsive web application for browsing and discovering Prometheus metrics across different services. Built with React, Vite, and Tailwind CSS, featuring a clean UI inspired by Just the Docs.

## 🌟 Features

- **Service-based Organization**: Metrics organized by service (Aerospike, Node Exporter, Nginx, Redis)
- **Advanced Search & Filtering**: Search by metric name, description, service, or importance level
- **Modern UI**: Clean, responsive design with Just the Docs inspired theme
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Filtering**: Instant search and filter results
- **Syntax Highlighting**: Beautiful code examples for metric usage

## 🚀 Live Demo

Visit the live application: [https://maxkushnir.github.io/prometheus-metrics-catalog/](https://maxkushnir.github.io/prometheus-metrics-catalog/)

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom theme
- **Icons**: Heroicons
- **Fonts**: Inter + JetBrains Mono
- **Build**: Vite with GitHub Pages optimization

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/maxkushnir/prometheus-metrics-catalog.git
cd prometheus-metrics-catalog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
prometheus-metrics-catalog/
├── public/
│   ├── banner.png          # Header banner image
│   └── favicon.ico         # Site favicon
├── src/
│   ├── components/
│   │   ├── MetricCard.jsx  # Individual metric display
│   │   ├── MetricList.jsx  # Metrics list container
│   │   └── SearchBar.jsx   # Search and filter controls
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── data/
│   ├── services.json       # Service configuration
│   └── services/           # Service-specific metric files
│       ├── aerospike/
│       ├── node_exporter/
│       ├── nginx/
│       └── redis/
└── .github/workflows/      # GitHub Actions for deployment
```

## 🎨 Customization

### Adding New Services

1. Create a new directory in `data/services/` (e.g., `data/services/mysql/`)
2. Add a `metrics.json` file with your service's metrics
3. Update `data/services.json` to include the new service

### Styling

The application uses Tailwind CSS with a custom theme. Key customization files:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles and font imports
- Component files - Individual component styling

### Banner Image

Replace `public/banner.png` with your own banner image. Recommended size: 1200x400px or similar aspect ratio.

## 🚀 Deployment

This project uses a branch-based contribution flow with automatic deployment:

1. **Contributors**: Create feature branches and submit pull requests
2. **Maintainers**: Review and merge PRs to the `main` branch
3. **GitHub Actions**: Automatically builds and deploys when PRs are merged
4. **Live Site**: Available at `https://maxkushnir.github.io/prometheus-metrics-catalog/`

## 📝 Contributing

We welcome contributions! Please follow our contribution guidelines:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/add-mysql-metrics`
3. **Make** your changes and test them locally
4. **Commit** with clear messages: `git commit -m "Add MySQL Exporter metrics"`
5. **Push** to your fork: `git push origin feature/add-mysql-metrics`
6. **Submit** a pull request with a detailed description

### Development Workflow

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Adding New Metrics

- Add new service metrics to `/src/data/services/SERVICE_NAME/metrics.json`
- Update `/src/data/services.json` to include the new service
- Follow the existing JSON schema and naming conventions

For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Just the Docs](https://just-the-docs.github.io/just-the-docs/) for UI inspiration
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the component-based architecture
- [Vite](https://vitejs.dev/) for the fast build tool