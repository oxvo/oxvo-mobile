import SessionEndpoints from '@oxvo-mobile/domains/Sessions/constants/endpoints';

import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const CreateSessionResponseSchema = z.object({
  id: z.number(),
  staffId: z.number(),
  clientId: z.number(),
  companyId: z.number(),
  companyServiceId: z.number(),
  note: z.string().optional(),
  isActive: z.boolean(),
  staffReply: z.string(),
  clientReply: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

const CreateSessionPayloadSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
  staffId: z.number(),
  companyServiceId: z.number(),
  note: z.string().optional(),
});

export type CreateSessionPayload = z.infer<typeof CreateSessionPayloadSchema>;
export type CreateSessionResponse = z.infer<typeof CreateSessionResponseSchema>;

const createSession = async (payload: CreateSessionPayload): Promise<CreateSessionResponse> => {
  const validatedPayload = CreateSessionPayloadSchema.parse(payload);

  const response = await apiRequest<CreateSessionResponse>({
    method: 'POST',
    url: SessionEndpoints.CREATE_SESSION,
    data: validatedPayload,
  });

  return CreateSessionResponseSchema.parse(response);
};

export default createSession;
