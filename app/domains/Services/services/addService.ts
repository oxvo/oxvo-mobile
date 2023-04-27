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

const AddServicePayloadSchema = z.number();

export type AddServicePayload = z.infer<typeof AddServicePayloadSchema>;
export type AddServiceResponse = z.infer<typeof AddServiceResponseSchema>;

const addService = async (serviceId: AddServicePayload): Promise<AddServiceResponse> => {
  const validatedPayload = AddServicePayloadSchema.parse(serviceId);

  const response = await apiRequest<AddServiceResponse>({
    method: 'POST',
    url: ServicesEndpoints.addService(validatedPayload),
  });

  return AddServiceResponseSchema.parse(response);
};

export default addService;
