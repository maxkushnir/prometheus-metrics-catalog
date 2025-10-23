import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ searchTerm, onSearchChange, onImportanceFilter, onServiceFilter, services, serviceFilter }) => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isImportanceDropdownOpen, setIsImportanceDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef(null);
  const importanceDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target)) {
        setIsServiceDropdownOpen(false);
      }
      if (importanceDropdownRef.current && !importanceDropdownRef.current.contains(event.target)) {
        setIsImportanceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleServiceSelect = (service) => {
    onServiceFilter(service);
    setIsServiceDropdownOpen(false);
  };

  const handleImportanceSelect = (importance) => {
    onImportanceFilter(importance);
    setIsImportanceDropdownOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-soft border border-gray-200 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search input */}
        <div className="flex-1">
          <label htmlFor="search" className="block text-base lg:text-sm font-medium text-gray-700 mb-2">
            Search metrics
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="search"
              type="text"
              placeholder="Search by metric name or description..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-4 lg:py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-lg lg:text-sm"
            />
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-48">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service
            </label>
            <div className="relative" ref={serviceDropdownRef}>
              <button
                type="button"
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-lg lg:text-sm text-left"
              >
                {serviceFilter || 'All Services'}
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              {isServiceDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                  <button
                    onClick={() => handleServiceSelect('')}
                    className={`block w-full text-left px-4 py-2 text-lg lg:text-sm hover:bg-gray-100 ${
                      !serviceFilter ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                    }`}
                  >
                    All Services
                  </button>
                  {services.map(service => (
                    <button
                      key={service}
                      onClick={() => handleServiceSelect(service)}
                      className={`block w-full text-left px-4 py-2 text-lg lg:text-sm hover:bg-gray-100 ${
                        serviceFilter === service ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="sm:w-48">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Importance
            </label>
            <div className="relative" ref={importanceDropdownRef}>
              <button
                type="button"
                onClick={() => setIsImportanceDropdownOpen(!isImportanceDropdownOpen)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-lg lg:text-sm text-left"
              >
                {importanceFilter || 'All Importance'}
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              {isImportanceDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                  <button
                    onClick={() => handleImportanceSelect('')}
                    className={`block w-full text-left px-4 py-2 text-lg lg:text-sm hover:bg-gray-100 ${
                      !importanceFilter ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                    }`}
                  >
                    All Importance
                  </button>
                  <button
                    onClick={() => handleImportanceSelect('critical')}
                    className={`block w-full text-left px-4 py-2 text-lg lg:text-sm hover:bg-gray-100 ${
                      importanceFilter === 'critical' ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                    }`}
                  >
                    Critical
                  </button>
                  <button
                    onClick={() => handleImportanceSelect('high')}
                    className={`block w-full text-left px-4 py-2 text-lg lg:text-sm hover:bg-gray-100 ${
                      importanceFilter === 'high' ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                    }`}
                  >
                    High
                  </button>
                  <button
                    onClick={() => handleImportanceSelect('medium')}
                    className={`block w-full text-left px-4 py-2 text-lg lg:text-sm hover:bg-gray-100 ${
                      importanceFilter === 'medium' ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                    }`}
                  >
                    Medium
                  </button>
                  <button
                    onClick={() => handleImportanceSelect('low')}
                    className={`block w-full text-left px-4 py-2 text-lg lg:text-sm hover:bg-gray-100 ${
                      importanceFilter === 'low' ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                    }`}
                  >
                    Low
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
