import AUTH_ENDOINTS from '@oxvo-mobile/domains/Auth/constants/endpoints';

import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const RefreshTokenPayloadSchema = z.object({
  refreshToken: z.string(),
});

const RefreshTokenResponseSchema = z.object({
  accessToken: z.string(),
  accessTokenExpiresAt: z.string(),
  refreshToken: z.string(),
  refreshTokenExpiresAt: z.null(),
});

export type RefreshTokenPayload = z.infer<typeof RefreshTokenPayloadSchema>;
export type RefreshTokenResponse = z.infer<typeof RefreshTokenResponseSchema>;

const refreshToken = async (payload: RefreshTokenPayload): Promise<RefreshTokenResponse> => {
  const validPayload = RefreshTokenPayloadSchema.parse(payload);

  const response = await apiRequest<RefreshTokenResponse>({
    method: 'POST',
    url: AUTH_ENDOINTS.REFRESH_TOKEN,
    data: validPayload,
  });

  return RefreshTokenResponseSchema.parse(response);
};

export default refreshToken;
