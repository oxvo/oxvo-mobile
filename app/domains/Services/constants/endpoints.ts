const SERVICE_ENDPOINTS = {
  MY_PACKAGES: 'v1/services/my-packages',
  ALL_SERVICES: 'v1/services',
  MY_SERVICES: 'v1/services/my-services',
};

const buildServiceEnpoints = {
  addService: (serviceId: number) => `v1/services/my-services/${serviceId}`,
};

const ServiceEndpoints = {
  ...SERVICE_ENDPOINTS,
  ...buildServiceEnpoints,
};

export default ServiceEndpoints;
