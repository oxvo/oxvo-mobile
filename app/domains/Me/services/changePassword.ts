import ME_ENDPOINTS from '@oxvo-mobile/domains/Me/constants/endpoints';
import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const ChangePasswordPayloadSchema = z.object({
  password: z.string(),
  passwordConfirmation: z.string(),
});

const ChangePasswordResponseSchema = z.object({
  message: z.string(),
});

export type ChangePasswordPayload = z.infer<typeof ChangePasswordPayloadSchema>;
export type ChangePasswordResponse = z.infer<typeof ChangePasswordResponseSchema>;

const changePassword = async (payload: ChangePasswordPayload): Promise<ChangePasswordResponse> => {
  const validPayload = ChangePasswordPayloadSchema.parse(payload);

  const response = await apiRequest<ChangePasswordResponse>({
    method: 'PATCH',
    url: ME_ENDPOINTS.CHANGE_PASSWORD,
    data: validPayload,
  });

  return ChangePasswordResponseSchema.parse(response);
};

export default changePassword;
