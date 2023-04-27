import SessionEndpoints from '@oxvo-mobile/domains/Sessions/constants/endpoints';

import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const UpdateSessionResponseSchema = z.object({
  id: z.number(),
  staffId: z.number(),
  clientId: z.number(),
  companyId: z.number(),
  companyServiceId: z.number(),
  note: z.string(),
  isActive: z.boolean(),
  staffReply: z.string(),
  clientReply: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

const UpdateSessionPayloadSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  staffId: z.number().optional(),
  companyServiceId: z.number().optional(),
  note: z.string().optional(),
});

const SessionIdSchema = z.number();

export type UpdateSessionPayload = z.infer<typeof UpdateSessionPayloadSchema>;
export type UpdateSessionResponse = z.infer<typeof UpdateSessionResponseSchema>;
export type UpdateSessionSessionId = z.infer<typeof SessionIdSchema>;

const updateSession = async (
  sessionId: UpdateSessionSessionId,
  payload: UpdateSessionPayload
): Promise<UpdateSessionResponse> => {
  const validatedPayload = UpdateSessionPayloadSchema.parse(payload);
  const validatedSessionId = SessionIdSchema.parse(sessionId);

  const response = await apiRequest<UpdateSessionResponse>({
    method: 'PUT',
    url: SessionEndpoints.updateSession(validatedSessionId),
    data: validatedPayload,
  });

  return UpdateSessionResponseSchema.parse(response);
};

export default updateSession;
