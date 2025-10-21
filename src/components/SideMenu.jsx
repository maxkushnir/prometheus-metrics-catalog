import React from 'react';

const SideMenu = ({ services, selectedService, onServiceSelect, metrics }) => {
  // Group services by category based on the services.json configuration
  const serviceCategories = {
    'Basic resource monitoring': ['aerospike', 'node_exporter'],
    'Databases and brokers': ['redis'],
    'Reverse proxies and load balancers': ['nginx'],
    'Network, security and storage': ['pure']
  };

  // Get service info from services config
  const getServiceInfo = (serviceName) => {
    return services.find(s => s.name === serviceName) || {
      name: serviceName,
      displayName: serviceName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: 'Service metrics',
      color: 'gray'
    };
  };

  // Get metrics count for a service
  const getMetricsCount = (serviceName) => {
    return metrics.filter(m => m.service === serviceName).length;
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto custom-scrollbar shadow-lg lg:shadow-none">
      <div className="p-4">
        {/* All Services */}
        <div className="mb-6">
          <button
            onClick={() => onServiceSelect('')}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedService === '' 
                ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>All Services</span>
              <span className="text-xs text-gray-500">{metrics.length}</span>
            </div>
          </button>
        </div>

        {/* Service Categories */}
        {Object.entries(serviceCategories).map(([category, serviceNames]) => (
          <div key={category} className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              {category}
            </h3>
            <div className="space-y-1">
              {serviceNames.map(serviceName => {
                const serviceInfo = getServiceInfo(serviceName);
                const metricsCount = getMetricsCount(serviceName);
                const isSelected = selectedService === serviceName;
                
                return (
                  <button
                    key={serviceName}
                    onClick={() => onServiceSelect(serviceName)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isSelected 
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className={`w-3 h-3 rounded-full mr-2 ${
                            serviceInfo.color === 'blue' ? 'bg-blue-500' :
                            serviceInfo.color === 'green' ? 'bg-green-500' :
                            serviceInfo.color === 'orange' ? 'bg-orange-500' :
                            serviceInfo.color === 'red' ? 'bg-red-500' :
                            serviceInfo.color === 'purple' ? 'bg-purple-500' :
                            'bg-gray-500'
                          }`}
                        />
                        <span>{serviceInfo.displayName}</span>
                      </div>
                      <span className="text-xs text-gray-500">{metricsCount}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
