import { COMPANY_SERVICE_TYPE, REPLY_STATUS } from '@oxvo-mobile/constants/global';
import HOME_ENDPOINTS from '@oxvo-mobile/domains/Home/constants/endpoints';
import apiRequest from '@oxvo-mobile/libs/apiRequest';
import { z } from 'zod';


const UserSchema = z.object({
  id: z.number(),
  photoUrl: z.string().nullable(),
  firstName: z.string(),
  lastName: z.string(),
});

const StaffSchema = UserSchema.extend({});

const ClientSchema = UserSchema.extend({});

const CompanyServiceSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.nativeEnum(COMPANY_SERVICE_TYPE),
  description: z.string(),
});

const CompanyServicePackageSchema = z.object({
  id: z.number(),
  name: z.string(),
  count: z.number(),
  price: z.number(),
});

const SessionSchema = z.object({
  id: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  staff: StaffSchema,
  client: ClientSchema,
  companyService: CompanyServiceSchema,
  note: z.string().nullable(),
  isActive: z.boolean(),
  staffReply: z.nativeEnum(REPLY_STATUS),
  clientReply: z.nativeEnum(REPLY_STATUS),
  updatedAt: z.string(),
  createdAt: z.string(),
});

const StaffSchemaInPackage = StaffSchema.extend({
  id: z.number().optional(),
});

const PackageSchema = z.object({
  id: z.number(),
  count: z.number(),
  staff: StaffSchemaInPackage,
  companyServicePackage: CompanyServicePackageSchema,
  updatedAt: z.string(),
  createdAt: z.string(),
});

const HomeResponseSchema = z.object({
  sessions: z.array(SessionSchema).nonempty(),
  packages: z.array(PackageSchema).optional(),
});

const HomePayloadSchema = z.object({});

export type HomeResponse = z.infer<typeof HomeResponseSchema>;
export type HomePayload = z.infer<typeof HomePayloadSchema>;

const fetchHome = async (): Promise<HomeResponse> => {
  const response = await apiRequest<HomeResponse>({
    method: 'GET',
    url: HOME_ENDPOINTS.FETCH_HOME,
  });

  return HomeResponseSchema.parse(response);
};

export default fetchHome;