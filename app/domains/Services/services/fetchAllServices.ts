import { CompanyServiceType } from '@oxvo-mobile/constants/oxvo';
import ServicesEndpoints from '@oxvo-mobile/domains/Services/constants/endpoints';
import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const AllServicesResponseSchema = z.object({
  id: z.number(),
  type: z.nativeEnum(CompanyServiceType),
  name: z.string(),
  description: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
});

const AllServicesPayloadSchema = z.object({});

export type AllServicesPayload = z.infer<typeof AllServicesPayloadSchema>;
export type AllServicesResponse = z.infer<typeof AllServicesResponseSchema>;

const fetchAllServices = async (): Promise<AllServicesResponse> => {
  const response = await apiRequest<AllServicesResponse>({
    method: 'GET',
    url: ServicesEndpoints.ALL_SERVICES,
  });

  return AllServicesResponseSchema.parse(response);
};

export default fetchAllServices;
