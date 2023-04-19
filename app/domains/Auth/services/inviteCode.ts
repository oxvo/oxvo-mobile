import { INVITE_CODE_SETTINGS } from '@oxvo-mobile/domains/Auth/constants/auth';
import AuthEdpoints from '@oxvo-mobile/domains/Auth/constants/endpoints';
import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const InviteCodePayloadSchema = z
  .string()
  .min(INVITE_CODE_SETTINGS.MIN_LENGTH)
  .max(INVITE_CODE_SETTINGS.MAX_LENGTH);

const InviteCodeResponseSchema = z.object({
  code: z.string(),
  name: z.string(),
  description: z.string(),
  mainColor: z.string().nullable(),
  secondaryColor: z.string().nullable(),
  logo: z.string().nullable(),
});

export type InviteCodePayload = z.infer<typeof InviteCodePayloadSchema>;
export type InviteCodeResponse = z.infer<typeof InviteCodeResponseSchema>;

const inviteCode = async (payload: InviteCodePayload): Promise<InviteCodeResponse> => {
  const validPayload = InviteCodePayloadSchema.parse(payload);

  const response = await apiRequest<InviteCodeResponse>({
    method: 'GET',
    url: AuthEdpoints.INVITE_CODE,
    params: {
      code: validPayload,
    },
  });

  return InviteCodeResponseSchema.parse(response);
};

export default inviteCode;
