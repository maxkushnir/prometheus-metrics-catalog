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
      {/* Header with banner image */}
      <header className="bg-white border-b border-gray-200">
        <div className="relative">
          {/* Banner Image */}
          <div className="w-full h-48 md:h-56 lg:h-64 bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center relative overflow-hidden">
            <img 
              src="/banner.png" 
              alt="Prometheus Metrics Catalog" 
              className="h-full w-full object-cover"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                e.target.style.display = 'none';
                e.target.parentElement.className = 'w-full h-48 md:h-56 lg:h-64 bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center';
              }}
            />
            {/* Overlay content */}
            <div className="absolute inset-0 bg-black bg-opacity-20">
              <div className="absolute bottom-4 right-4 text-white">
                <p className="text-lg md:text-xl opacity-90">
                  {metrics.length} metrics across {availableServices.length} services
                </p>
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
