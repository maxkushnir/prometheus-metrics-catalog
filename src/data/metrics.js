// Import individual service metrics
import aerospikeMetrics from './services/aerospike/metrics.json';
import couchbaseMetrics from './services/couchbase/metrics.json';
import nodeExporterMetrics from './services/node_exporter/metrics.json';
import nginxMetrics from './services/nginx/metrics.json';
import redisMetrics from './services/redis/metrics.json';
import pureMetrics from './services/pure/metrics.json';
import kafkaMetrics from './services/kafka/metrics.json';
import maxscaleMetrics from './services/maxscale/metrics.json';
import mariadbMetrics from './services/mariadb/metrics.json';
import mssqlMetrics from './services/mssql/metrics.json';
import mongodbMetrics from './services/mongodb/metrics.json';
import postgresqlMetrics from './services/postgresql/metrics.json';
import awsMetrics from './services/aws/metrics.json';
import f5BigipMetrics from './services/f5_bigip/metrics.json';
import kubeStateMetrics from './services/kube-state-metrics/metrics.json';
import servicesConfig from './services.json';

// Combine all metrics
export const allMetrics = [
  ...aerospikeMetrics,
  ...couchbaseMetrics,
  ...nodeExporterMetrics,
  ...nginxMetrics,
  ...redisMetrics,
  ...pureMetrics,
  ...kafkaMetrics,
  ...maxscaleMetrics,
  ...mariadbMetrics,
  ...mssqlMetrics,
  ...mongodbMetrics,
  ...postgresqlMetrics,
  ...awsMetrics,
  ...f5BigipMetrics,
  ...kubeStateMetrics
];

// Export services configuration
export const services = servicesConfig.services;