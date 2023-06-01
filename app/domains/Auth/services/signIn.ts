import { PASSWORD_SETTINGS } from '@oxvo-mobile/domains/Auth/constants/auth';
import AuthEndpoints from '@oxvo-mobile/domains/Auth/constants/endpoints';

import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const SignInPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string().min(PASSWORD_SETTINGS.MIN_LENGTH).max(PASSWORD_SETTINGS.MAX_LENGTH),
});

const SignInResponseSchema = z.object({
  accessToken: z.string(),
  accessTokenExpiresAt: z.null(),
  refreshToken: z.string(),
  refreshTokenExpiresAt: z.null(),
});

export type SignInPayload = z.infer<typeof SignInPayloadSchema>;
export type SignInResponse = z.infer<typeof SignInResponseSchema>;

const signIn = async (payload: SignInPayload): Promise<SignInResponse> => {
  const validPayload = SignInPayloadSchema.parse(payload);

  const response = await apiRequest<SignInResponse>({
    method: 'POST',
    url: AuthEndpoints.SIGN_IN,
    data: validPayload,
  });

  return SignInResponseSchema.parse(response);
};

export default signIn;
