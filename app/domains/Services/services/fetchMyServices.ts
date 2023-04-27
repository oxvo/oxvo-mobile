import ServicesEndpoints from '@oxvo-mobile/domains/Services/constants/endpoints';

import { CompanyServiceType } from '@oxvo-mobile/constants/oxvo';

import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const MyServicesResponseSchema = z.object({
  companyService: z.object({
    id: z.number(),
    companyId: z.number(),
    name: z.string(),
    type: z.nativeEnum(CompanyServiceType),
    description: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
});

const MyServicesPayloadSchema = z.object({});

export type MyServicesPayload = z.infer<typeof MyServicesPayloadSchema>;
export type MyServicesResponse = z.infer<typeof MyServicesResponseSchema>;

const fetchMyServices = async (): Promise<MyServicesResponse> => {
  const response = await apiRequest<MyServicesPayload>({
    method: 'GET',
    url: ServicesEndpoints.ALL_SERVICES,
  });

  return MyServicesResponseSchema.parse(response);
};

export default fetchMyServices;
