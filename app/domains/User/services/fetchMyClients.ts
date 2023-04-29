import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

import USER_ENDPOINTS from '../constants/endpoints';

const MyClientResponseSchema = z.object({
  client: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    photoUrl: z.string().nullable(),
    phone: z.string().nullable(),
  }),
});

export type MyClientResponse = z.infer<typeof MyClientResponseSchema>;

const MyClientsResponseSchema = z.array(MyClientResponseSchema);

export type MyClientsResponse = z.infer<typeof MyClientsResponseSchema>;

const fetchMyClients = async (): Promise<MyClientsResponse> => {
  const response = await apiRequest<MyClientsResponse>({
    method: 'GET',
    url: USER_ENDPOINTS.FETCH_MY_CLIENTS,
  });

  return MyClientsResponseSchema.parse(response);
};

export default fetchMyClients;
