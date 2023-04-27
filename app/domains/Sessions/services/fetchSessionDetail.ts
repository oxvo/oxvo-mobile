import SessionEndpoints from '@oxvo-mobile/domains/Sessions/constants/endpoints';

import { CompanyServiceType } from '@oxvo-mobile/constants/oxvo';

import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const SessionDetailResponseSchema = z.object({
  id: z.number(),
  note: z.string().optional(),
  staff: z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    photoUrl: z.string().nullable(),
  }),
  client: z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    photoUrl: z.string().nullable(),
  }),
  companyService: z.object({
    id: z.number(),
    name: z.string(),
    type: z.nativeEnum(CompanyServiceType),
    description: z.string(),
  }),
  staffReply: z.string(),
  clientReply: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

const SessionDetailPayloadSchema = z.number();

export type SessionDetailPayload = z.infer<typeof SessionDetailPayloadSchema>;
export type SessionDetailResponse = z.infer<typeof SessionDetailResponseSchema>;

const fetchSessionDetail = async (
  sessionId: SessionDetailPayload
): Promise<SessionDetailResponse> => {
  const validatedPayload = SessionDetailPayloadSchema.parse(sessionId);

  const response = await apiRequest<SessionDetailResponse>({
    method: 'GET',
    url: SessionEndpoints.fetchSessionDetail(validatedPayload),
  });

  return SessionDetailResponseSchema.parse(response);
};

export default fetchSessionDetail;
