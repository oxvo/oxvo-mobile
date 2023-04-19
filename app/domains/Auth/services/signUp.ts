import { PASSWORD_SETTINGS } from '@oxvo-mobile/domains/Auth/constants/auth';
import AUTH_ENDPOINTS from '@oxvo-mobile/domains/Auth/constants/endpoints';
import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const SignUpPayloadSchema = z
  .object({
    code: z.string().length(6),
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(PASSWORD_SETTINGS.MIN_LENGTH).max(PASSWORD_SETTINGS.MAX_LENGTH),
    passwordConfirmation: z
      .string()
      .min(PASSWORD_SETTINGS.MIN_LENGTH)
      .max(PASSWORD_SETTINGS.MAX_LENGTH),
  })
  .refine((data) => data.password === data.passwordConfirmation);

const SignUpResponseSchema = z.object({
  accessToken: z.string(),
  accessTokenExpiresAt: z.string(),
  refreshToken: z.string(),
  refreshTokenExpiresAt: z.null(),
});

export type SignUpPayload = z.infer<typeof SignUpPayloadSchema>;
export type SignUpResponse = z.infer<typeof SignUpResponseSchema>;

const signUp = async (payload: SignUpPayload): Promise<SignUpResponse> => {
  const validPayload = SignUpPayloadSchema.parse(payload);

  const response = await apiRequest<SignUpResponse>({
    method: 'POST',
    url: AUTH_ENDPOINTS.SIGN_UP,
    data: validPayload,
  });

  return SignUpResponseSchema.parse(response);
};

export default signUp;
