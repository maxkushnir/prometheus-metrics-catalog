// All metrics data embedded directly
export const allMetrics = [
  // Aerospike metrics
  {
    "name": "aerospike_namespace_memory_free_pct",
    "service": "aerospike",
    "labels": ["namespace"],
    "description": "Percentage of memory free in the namespace.",
    "importance": "high",
    "example_usage": "aerospike_namespace_memory_free_pct{namespace=\"test\"}"
  },
  {
    "name": "aerospike_namespace_disk_usage_bytes",
    "service": "aerospike", 
    "labels": ["namespace"],
    "description": "Disk usage in bytes for the namespace.",
    "importance": "high",
    "example_usage": "aerospike_namespace_disk_usage_bytes{namespace=\"test\"}"
  },
  {
    "name": "aerospike_namespace_objects",
    "service": "aerospike",
    "labels": ["namespace"],
    "description": "Number of objects in the namespace.",
    "importance": "medium",
    "example_usage": "aerospike_namespace_objects{namespace=\"test\"}"
  },
  {
    "name": "aerospike_namespace_evicted_objects",
    "service": "aerospike",
    "labels": ["namespace"],
    "description": "Number of evicted objects from the namespace.",
    "importance": "medium", 
    "example_usage": "aerospike_namespace_evicted_objects{namespace=\"test\"}"
  },
  {
    "name": "aerospike_namespace_expired_objects",
    "service": "aerospike",
    "labels": ["namespace"],
    "description": "Number of expired objects from the namespace.",
    "importance": "low",
    "example_usage": "aerospike_namespace_expired_objects{namespace=\"test\"}"
  },

  // Node Exporter metrics
  {
    "name": "node_cpu_seconds_total",
    "service": "node_exporter",
    "labels": ["cpu", "mode"],
    "description": "Total CPU time spent in different modes.",
    "importance": "high",
    "example_usage": "node_cpu_seconds_total{cpu=\"0\", mode=\"idle\"}"
  },
  {
    "name": "node_memory_MemTotal_bytes",
    "service": "node_exporter",
    "labels": [],
    "description": "Total memory in bytes.",
    "importance": "high",
    "example_usage": "node_memory_MemTotal_bytes"
  },
  {
    "name": "node_filesystem_size_bytes",
    "service": "node_exporter",
    "labels": ["device", "fstype", "mountpoint"],
    "description": "Filesystem size in bytes.",
    "importance": "high",
    "example_usage": "node_filesystem_size_bytes{device=\"/dev/sda1\", fstype=\"ext4\", mountpoint=\"/\"}"
  },
  {
    "name": "node_network_receive_bytes_total",
    "service": "node_exporter",
    "labels": ["device"],
    "description": "Total network bytes received.",
    "importance": "medium",
    "example_usage": "node_network_receive_bytes_total{device=\"eth0\"}"
  },
  {
    "name": "node_load1",
    "service": "node_exporter",
    "labels": [],
    "description": "1m load average.",
    "importance": "high",
    "example_usage": "node_load1"
  },

  // Nginx metrics
  {
    "name": "nginx_http_requests_total",
    "service": "nginx",
    "labels": ["status"],
    "description": "Total number of HTTP requests.",
    "importance": "high",
    "example_usage": "nginx_http_requests_total{status=\"200\"}"
  },
  {
    "name": "nginx_http_request_duration_seconds",
    "service": "nginx",
    "labels": ["method", "status"],
    "description": "HTTP request duration in seconds.",
    "importance": "high",
    "example_usage": "nginx_http_request_duration_seconds{method=\"GET\", status=\"200\"}"
  },
  {
    "name": "nginx_up",
    "service": "nginx",
    "labels": [],
    "description": "Nginx status (1 = up, 0 = down).",
    "importance": "high",
    "example_usage": "nginx_up"
  },
  {
    "name": "nginx_connections_active",
    "service": "nginx",
    "labels": [],
    "description": "Number of active connections.",
    "importance": "medium",
    "example_usage": "nginx_connections_active"
  },

  // Redis metrics
  {
    "name": "redis_connected_clients",
    "service": "redis",
    "labels": [],
    "description": "Number of connected clients.",
    "importance": "high",
    "example_usage": "redis_connected_clients"
  },
  {
    "name": "redis_used_memory_bytes",
    "service": "redis",
    "labels": [],
    "description": "Used memory in bytes.",
    "importance": "high",
    "example_usage": "redis_used_memory_bytes"
  },
  {
    "name": "redis_keyspace_hits_total",
    "service": "redis",
    "labels": [],
    "description": "Total number of keyspace hits.",
    "importance": "medium",
    "example_usage": "redis_keyspace_hits_total"
  },
  {
    "name": "redis_keyspace_misses_total",
    "service": "redis",
    "labels": [],
    "description": "Total number of keyspace misses.",
    "importance": "medium",
    "example_usage": "redis_keyspace_misses_total"
  },
  {
    "name": "redis_commands_processed_total",
    "service": "redis",
    "labels": [],
    "description": "Total number of commands processed.",
    "importance": "low",
    "example_usage": "redis_commands_processed_total"
  }
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