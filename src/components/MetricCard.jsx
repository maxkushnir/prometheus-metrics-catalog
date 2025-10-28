import React, { useState } from 'react';

const MetricCard = ({ metric }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'critical': return 'border-red-500 bg-red-50';
      case 'high': return 'border-orange-500 bg-orange-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getServiceColor = (service) => {
    switch (service) {
      case 'aerospike': return 'bg-blue-100 text-blue-800';
      case 'node_exporter': return 'bg-green-100 text-green-800';
      case 'nginx': return 'bg-orange-100 text-orange-800';
      case 'redis': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-soft border-l-4 p-4 mb-4 hover:shadow-medium transition-shadow duration-200 ${getImportanceColor(metric.importance)}`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base lg:text-lg font-mono font-bold text-gray-900 mb-1 break-all">{metric.name}</h3>
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getServiceColor(metric.service)}`}>
              {metric.service}
            </span>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
              metric.importance === 'critical' ? 'bg-red-100 text-red-800' :
              metric.importance === 'high' ? 'bg-orange-100 text-orange-800' :
              metric.importance === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {metric.importance}
            </span>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-3">
        <p className="text-sm text-gray-700 leading-relaxed">{metric.description}</p>
      </div>
      
      {/* Labels */}
      {metric.labels && metric.labels.length > 0 && (
        <div className="mb-3">
          <h4 className="text-xs font-semibold text-gray-900 mb-1">Labels</h4>
          <div className="flex flex-wrap gap-1">
            {metric.labels.map((label, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                {label}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Example Usage */}
      <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-xs font-semibold text-gray-900">Example Usage</h4>
          <button
            onClick={() => copyToClipboard(metric.example_usage)}
            className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
              copied 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
        <div className="bg-gray-900 rounded-md p-2 overflow-x-auto">
          <code className="text-xs text-green-400 font-mono break-all whitespace-pre-wrap">{metric.example_usage}</code>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
