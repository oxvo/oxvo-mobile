import ServicesEndpoints from '@oxvo-mobile/domains/Services/constants/endpoints';
import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const AddServiceResponseSchema = z.object({
  id: z.number(),
  staffId: z.number(),
  companyServiceId: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const AddServicePayloadSchema = z.object({
  serviceId: z.number(),
});

export type AddServicePayload = z.infer<typeof AddServicePayloadSchema>;
export type AddServiceResponse = z.infer<typeof AddServiceResponseSchema>;

const addService = async (payload: AddServicePayload): Promise<AddServiceResponse> => {
  const validatedPayload = AddServicePayloadSchema.parse(payload);

  const response = await apiRequest<AddServiceResponse>({
    method: 'POST',
    url: ServicesEndpoints.ADD_SERVICE,
    data: validatedPayload,
  });

  return AddServiceResponseSchema.parse(response);
};

export default addService;
