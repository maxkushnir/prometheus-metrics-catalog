// Import all metrics data
import aerospikeMetrics from '../../public/data/services/aerospike/metrics.json';
import nodeExporterMetrics from '../../public/data/services/node_exporter/metrics.json';
import nginxMetrics from '../../public/data/services/nginx/metrics.json';
import redisMetrics from '../../public/data/services/redis/metrics.json';

// Combine all metrics
export const allMetrics = [
  ...aerospikeMetrics,
  ...nodeExporterMetrics,
  ...nginxMetrics,
  ...redisMetrics
];

// Export services configuration
export const services = [
  {
    name: "aerospike",
    displayName: "Aerospike",
    description: "NoSQL database metrics",
    color: "blue"
  },
  {
    name: "node_exporter",
    displayName: "Node Exporter", 
    description: "System and hardware metrics",
    color: "green"
  },
  {
    name: "nginx",
    displayName: "Nginx",
    description: "Web server and reverse proxy metrics", 
    color: "orange"
  },
  {
    name: "redis",
    displayName: "Redis",
    description: "In-memory data structure store metrics",
    color: "red"
  }
];
