import { UserRoles } from '@oxvo-mobile/constants/global';
import ME_ENDPOINTS from '@oxvo-mobile/domains/Me/constants/endpoints';
import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

/**
 * This code snippet demonstrates the usage of Zod's enum method for creating an enumeration.
 * The UserRole enum is defined with two possible values: 'STAFF' and 'CLIENT'.
 * The UserRole.enumValues property provides access to these values.
 *
 * Example:
 * const UserRole = z.enum(['STAFF', 'CLIENT']);
 * console.log(UserRole.enumValues.STAFF); // "STAFF"
 * console.log(UserRole.enumValues.CLIENT); // "CLIENT"
 */

const MePayloadSchema = z.object({});

const MeResponseSchema = z.object({
  id: z.number(),
  currentCompanyId: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.nativeEnum(UserRoles),
  email: z.string(),
  emailVerifiedAt: z.string().nullable(),
  phone: z.string().nullable(),
  photoUrl: z.string().nullable(),
  isActive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type MePayload = z.infer<typeof MePayloadSchema>;
export type MeResponse = z.infer<typeof MeResponseSchema>;

const fecthMe = async (): Promise<MeResponse> => {
  const response = await apiRequest<MeResponse>({
    method: 'GET',
    url: ME_ENDPOINTS.FETCH_ME,
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return MeResponseSchema.parse(response);
};

export default fecthMe;
