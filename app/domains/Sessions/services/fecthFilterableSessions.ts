import SessionEndpoints, {
  FilteredSessionStatusType,
} from '@oxvo-mobile/domains/Sessions/constants/endpoints';

import { CompanyServiceType } from '@oxvo-mobile/constants/oxvo';

import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const FilterableSessionsResponseSchema = z.object({
  id: z.number(),
  note: z.string().optional(),
  isActive: z.boolean(),
  staffReply: z.string(),
  clientReply: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  startDate: z.string(),
  endDate: z.string(),
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
});

const FilterableSessionsPayloadSchema = z.nativeEnum(FilteredSessionStatusType);

export type FilterableSessionsResponse = z.infer<typeof FilterableSessionsResponseSchema>;
export type FilterableSessionsPayload = z.infer<typeof FilterableSessionsPayloadSchema>;

const fetchFilterableSessions = async (
  status?: FilterableSessionsPayload
): Promise<FilterableSessionsResponse> => {
  const url = SessionEndpoints.fetchFilterableSessions(status);

  const response = await apiRequest<FilterableSessionsResponse[]>({
    method: 'GET',
    url,
  });

  return FilterableSessionsResponseSchema.parse(response);
};

export default fetchFilterableSessions;
