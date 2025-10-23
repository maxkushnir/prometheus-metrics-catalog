import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, onImportanceFilter, onServiceFilter, services, serviceFilter }) => {
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
            <label htmlFor="service-filter" className="block text-base lg:text-sm font-medium text-gray-700 mb-2">
              Service
            </label>
            <select
              id="service-filter"
              value={serviceFilter}
              onChange={(e) => onServiceFilter(e.target.value)}
              className="block w-full px-3 py-4 lg:py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-lg lg:text-sm"
            >
              <option value="">All Services</option>
              {services.map(service => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          
          <div className="sm:w-48">
            <label htmlFor="importance-filter" className="block text-base lg:text-sm font-medium text-gray-700 mb-2">
              Importance
            </label>
            <select
              id="importance-filter"
              onChange={(e) => onImportanceFilter(e.target.value)}
              className="block w-full px-3 py-4 lg:py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-lg lg:text-sm"
            >
              <option value="">All Importance</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
