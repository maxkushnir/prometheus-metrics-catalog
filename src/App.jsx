import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MetricList from './components/MetricList';
import { allMetrics, services } from './data/metrics';
import './index.css';

function App() {
  const [metrics, setMetrics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [importanceFilter, setImportanceFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');

  useEffect(() => {
    // Load metrics from embedded data
    setMetrics(allMetrics);
  }, []);

  // Get unique services from metrics
  const availableServices = [...new Set(metrics.map(metric => metric.service))].sort();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            {/* Prometheus Logo */}
            <div className="mb-6">
              <svg className="w-20 h-20 mx-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Prometheus Metrics Catalog
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-white mb-8">
              Collection of Prometheus metrics from various services
            </p>
            
            {/* Stats */}
            <div className="flex justify-center space-x-12 text-base text-white">
              <div>
                <span className="font-semibold">{metrics.length}</span> metrics
              </div>
              <div>
                <span className="font-semibold">{availableServices.length}</span> services
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and filters */}
        <div className="mb-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onImportanceFilter={setImportanceFilter}
            onServiceFilter={setServiceFilter}
                services={availableServices}
            serviceFilter={serviceFilter}
          />
        </div>
        
        {/* Metrics list */}
        <MetricList
          metrics={metrics}
          searchTerm={searchTerm}
          importanceFilter={importanceFilter}
          serviceFilter={serviceFilter}
        />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Prometheus Metrics Catalog • Built with React & Tailwind CSS
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Inspired by Just the Docs theme
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
