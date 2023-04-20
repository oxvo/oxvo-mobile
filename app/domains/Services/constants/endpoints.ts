const SERVICES_ENDPOINTS = {
  ALL_SERVICES: 'v1/services',
  MY_SERVICES: 'v1/services/my-services',
};

const buildServicesEnpoints = {
  addService: (serviceId: number) => `v1/services/my-services/${serviceId}`,
};

const ServicesEndpoints = {
  ...SERVICES_ENDPOINTS,
  ...buildServicesEnpoints,
};

export default ServicesEndpoints;
