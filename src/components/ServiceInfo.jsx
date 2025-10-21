import React from 'react';

const ServiceInfo = ({ selectedService, services, metrics }) => {
  if (!selectedService) {
    return null;
  }

  const serviceInfo = services.find(s => s.name === selectedService);
  const serviceMetrics = metrics.filter(m => m.service === selectedService);
  const highImportanceMetrics = serviceMetrics.filter(m => m.importance === 'high').length;
  const mediumImportanceMetrics = serviceMetrics.filter(m => m.importance === 'medium').length;
  const lowImportanceMetrics = serviceMetrics.filter(m => m.importance === 'low').length;

  if (!serviceInfo) {
    return (
      <div className="bg-white rounded-lg shadow-soft border border-gray-200 p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {selectedService.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </h2>
        <p className="text-gray-600">
          {serviceMetrics.length} metrics available for this service.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-soft border border-gray-200 p-6 mb-6">
      <div className="flex items-center mb-4">
        <div 
          className={`w-4 h-4 rounded-full mr-3 ${
            serviceInfo.color === 'blue' ? 'bg-blue-500' :
            serviceInfo.color === 'green' ? 'bg-green-500' :
            serviceInfo.color === 'orange' ? 'bg-orange-500' :
            serviceInfo.color === 'red' ? 'bg-red-500' :
            serviceInfo.color === 'purple' ? 'bg-purple-500' :
            'bg-gray-500'
          }`}
        />
        <h2 className="text-2xl font-bold text-gray-900">{serviceInfo.displayName}</h2>
      </div>
      
      <p className="text-gray-600 mb-6">{serviceInfo.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Total Metrics</h3>
          <p className="text-2xl font-bold text-gray-600">{serviceMetrics.length}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-900 mb-2">High Priority</h3>
          <p className="text-2xl font-bold text-red-600">{highImportanceMetrics}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-900 mb-2">Medium Priority</h3>
          <p className="text-2xl font-bold text-yellow-600">{mediumImportanceMetrics}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">Low Priority</h3>
          <p className="text-2xl font-bold text-green-600">{lowImportanceMetrics}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
