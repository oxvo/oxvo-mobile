const SERVICES_ENDPOINTS = {
  ALL_SERVICES: 'v1/services',
  MY_SERVICES: 'v1/services/my-services',
  ADD_SERVICE: 'v1/services/my-services',
};

const buildServicesEnpoints = {
  addService: (serviceId: number) => `${SERVICES_ENDPOINTS.ADD_SERVICE}/${serviceId}`,
};

const ServicesEndpoints = {
  ...SERVICES_ENDPOINTS,
  ...buildServicesEnpoints,
};

export default ServicesEndpoints;
