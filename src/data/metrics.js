// Import individual service metrics
import aerospikeMetrics from './services/aerospike/metrics.json';
import nodeExporterMetrics from './services/node_exporter/metrics.json';
import nginxMetrics from './services/nginx/metrics.json';
import redisMetrics from './services/redis/metrics.json';
import pureMetrics from './services/pure/metrics.json';
import servicesConfig from './services.json';

// Combine all metrics
export const allMetrics = [
  ...aerospikeMetrics,
  ...nodeExporterMetrics,
  ...nginxMetrics,
  ...redisMetrics,
  ...pureMetrics
];

// Export services configuration
export const services = servicesConfig.services;