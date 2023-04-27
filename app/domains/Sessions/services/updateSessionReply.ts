import SessionEndpoints from '@oxvo-mobile/domains/Sessions/constants/endpoints';

import { SessionStatusType } from '@oxvo-mobile/constants/oxvo';

import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const UpdateSessionReplyResponseSchema = z.object({
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

const UpdateSessionReplyPayloadSchema = z.object({
  sessionId: z.number(),
  sessionReply: z.nativeEnum(SessionStatusType),
});

export type UpdateSessionReplyPayload = z.infer<typeof UpdateSessionReplyPayloadSchema>;
export type UpdateSessionReplyResponse = z.infer<typeof UpdateSessionReplyResponseSchema>;

const updateSessionReply = async (
  payload: UpdateSessionReplyPayload
): Promise<UpdateSessionReplyResponse> => {
  const validatedPayload = UpdateSessionReplyPayloadSchema.parse(payload);

  const response = await apiRequest<UpdateSessionReplyResponse>({
    method: 'PATCH',
    url: SessionEndpoints.updateSessionReply(validatedPayload),
  });

  return UpdateSessionReplyResponseSchema.parse(response);
};

export default updateSessionReply;
