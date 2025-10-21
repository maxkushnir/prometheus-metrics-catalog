import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MetricList from './components/MetricList';
import SideMenu from './components/SideMenu';
import ServiceInfo from './components/ServiceInfo';
import { allMetrics, services } from './data/metrics';
import './index.css';

function App() {
  const [metrics, setMetrics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [importanceFilter, setImportanceFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load metrics from embedded data
    setMetrics(allMetrics);
  }, []);

  // Get unique services from metrics
  const availableServices = [...new Set(metrics.map(metric => metric.service))].sort();

  // Handle service selection from side menu
  const handleServiceSelect = (serviceName) => {
    setSelectedService(serviceName);
    setServiceFilter(serviceName);
    // Close mobile menu after selection
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
          {/* Mobile menu button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <div className="text-center">
            {/* Prometheus Logo */}
            <div className="mb-3 lg:mb-6">
              <svg className="w-10 h-10 lg:w-20 lg:h-20 mx-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 lg:mb-4">
              Prometheus Metrics Catalog
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm lg:text-xl text-white mb-4 lg:mb-8">
              Collection of Prometheus metrics from various services
            </p>
            
            {/* Stats */}
            <div className="flex justify-center space-x-6 lg:space-x-12 text-sm lg:text-base text-white">
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

      {/* Main content area with side menu */}
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* Side Menu */}
        <div className={`
          ${isMobileMenuOpen ? 'fixed inset-y-0 left-0 z-50' : 'hidden lg:block'}
          lg:relative lg:inset-auto
        `}>
          <SideMenu
            services={services}
            selectedService={selectedService}
            onServiceSelect={handleServiceSelect}
            metrics={metrics}
          />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Service Information */}
            <ServiceInfo
              selectedService={selectedService}
              services={services}
              metrics={metrics}
            />
            
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
        </div>
      </div>
    </div>
  );
}

export default App;
