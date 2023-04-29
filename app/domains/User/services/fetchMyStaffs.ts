import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

import USER_ENDPOINTS from '../constants/endpoints';

const MyStaffResponseSchema = z.object({
  staff: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    photoUrl: z.string().nullable(),
    phone: z.string().nullable(),
  }),
});

export type MyStaffResponse = z.infer<typeof MyStaffResponseSchema>;

const MyStaffsResponseSchema = z.array(MyStaffResponseSchema);

export type MyStaffsResponse = z.infer<typeof MyStaffsResponseSchema>;

const fetchMyStaffs = async (): Promise<MyStaffsResponse> => {
  const response = await apiRequest<MyStaffsResponse>({
    method: 'GET',
    url: USER_ENDPOINTS.FETCH_MY_STAFFS,
  });

  return MyStaffsResponseSchema.parse(response);
};

export default fetchMyStaffs;
