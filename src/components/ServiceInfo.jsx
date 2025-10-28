import React from 'react';

const ServiceInfo = ({ selectedService, services, metrics }) => {
  if (!selectedService) {
    return null;
  }

  const serviceInfo = services.find(s => s.name === selectedService);
  let serviceMetrics = metrics.filter(m => m.service === selectedService);
  
  // If this is a service group, get metrics from all subservices
  if (serviceInfo && serviceInfo.isGroup && serviceInfo.subservices) {
    serviceMetrics = metrics.filter(m => 
      serviceInfo.subservices.some(sub => sub.name === m.service)
    );
  }
  
  const highImportanceMetrics = serviceMetrics.filter(m => m.importance === 'high').length;
  const mediumImportanceMetrics = serviceMetrics.filter(m => m.importance === 'medium').length;
  const lowImportanceMetrics = serviceMetrics.filter(m => m.importance === 'low').length;
  const criticalImportanceMetrics = serviceMetrics.filter(m => m.importance === 'critical').length;

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
      
      {/* Exporter Information */}
      {serviceInfo.exporter && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800 mb-1">
            <span className="font-medium">Exporter:</span> {serviceInfo.exporter.name}
          </p>
          <p className="text-sm text-blue-800 break-all">
            <span className="font-medium">Link:</span> 
            <a 
              href={serviceInfo.exporter.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-blue-600 hover:text-blue-800 underline break-all"
            >
              {serviceInfo.exporter.link}
            </a>
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Total</h3>
          <p className="text-2xl font-bold text-gray-600">{serviceMetrics.length}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-900 mb-2">Critical</h3>
          <p className="text-2xl font-bold text-purple-600">{criticalImportanceMetrics}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-900 mb-2">High</h3>
          <p className="text-2xl font-bold text-red-600">{highImportanceMetrics}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-900 mb-2">Medium</h3>
          <p className="text-2xl font-bold text-yellow-600">{mediumImportanceMetrics}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">Low</h3>
          <p className="text-2xl font-bold text-green-600">{lowImportanceMetrics}</p>
        </div>
      </div>
      
      {/* Subservice breakdown for service groups */}
      {serviceInfo.isGroup && serviceInfo.subservices && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subservices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceInfo.subservices.map((subservice) => {
              const subMetrics = metrics.filter(m => m.service === subservice.name);
              const subHigh = subMetrics.filter(m => m.importance === 'high').length;
              const subMedium = subMetrics.filter(m => m.importance === 'medium').length;
              const subLow = subMetrics.filter(m => m.importance === 'low').length;
              const subCritical = subMetrics.filter(m => m.importance === 'critical').length;
              
              return (
                <div key={subservice.name} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{subservice.displayName}</h4>
                  <p className="text-sm text-gray-600 mb-3">{subservice.description}</p>
                  
                  {/* Subservice Exporter Information */}
                  {subservice.exporter && (
                    <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-3">
                      <p className="text-xs text-blue-800 mb-1">
                        <span className="font-medium">Exporter:</span> {subservice.exporter.name}
                      </p>
                      <p className="text-xs text-blue-800 break-all">
                        <span className="font-medium">Link:</span> 
                        <a 
                          href={subservice.exporter.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-1 text-blue-600 hover:text-blue-800 underline break-all"
                        >
                          {subservice.exporter.link}
                        </a>
                      </p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-5 gap-2 text-center">
                    <div>
                      <p className="text-lg font-bold text-gray-600">{subMetrics.length}</p>
                      <p className="text-xs text-gray-500">Total</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-purple-600">{subCritical}</p>
                      <p className="text-xs text-gray-500">Critical</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-red-600">{subHigh}</p>
                      <p className="text-xs text-gray-500">High</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-yellow-600">{subMedium}</p>
                      <p className="text-xs text-gray-500">Medium</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-green-600">{subLow}</p>
                      <p className="text-xs text-gray-500">Low</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceInfo;
