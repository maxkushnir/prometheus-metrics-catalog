import React from 'react';
import MetricCard from './MetricCard';

const MetricList = ({ metrics, searchTerm, importanceFilter, serviceFilter, services }) => {
  const filteredMetrics = metrics.filter(metric => {
    const matchesSearch = metric.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         metric.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesImportance = !importanceFilter || metric.importance === importanceFilter;
    
    // Handle service filtering for both regular services and service groups
    let matchesService = !serviceFilter || metric.service === serviceFilter;
    
    if (serviceFilter && services) {
      const serviceInfo = services.find(s => s.name === serviceFilter);
      if (serviceInfo && serviceInfo.isGroup && serviceInfo.subservices) {
        // For service groups, match any subservice
        matchesService = serviceInfo.subservices.some(sub => sub.name === metric.service);
      }
    }
    
    return matchesSearch && matchesImportance && matchesService;
  });

  if (filteredMetrics.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto h-12 w-12 text-gray-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No metrics found</h3>
        <p className="mt-1 text-sm text-gray-500">
          Try adjusting your search criteria or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {filteredMetrics.map((metric, index) => (
        <MetricCard key={`${metric.name}-${index}`} metric={metric} />
      ))}
    </div>
  );
};

export default MetricList;
