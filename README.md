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

Visit the live application: [https://maxkushnir.github.io/prometheus-metrics-catalog/](https://maxkushnir.github.io/prometheus-metrics-catalog.github.io/)

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

This project is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. The site will be available at `https://maxkushnir.github.io/prometheus-metrics-catalog/`

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Just the Docs](https://just-the-docs.github.io/just-the-docs/) for UI inspiration
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the component-based architecture
- [Vite](https://vitejs.dev/) for the fast build tool