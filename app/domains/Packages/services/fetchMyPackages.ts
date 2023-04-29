import PACKAGES_ENDPOINTS from '@oxvo-mobile/domains/Packages/constants/endpoints';

import { CompanyServiceType } from '@oxvo-mobile/constants/oxvo';

import apiRequest from '@oxvo-mobile/libs/apiRequest';

import { z } from 'zod';

const MyPackagesResponseSchema = z.array(
  z.object({
    staff: z.object({
      firstName: z.string(),
      lastName: z.string(),
    }),
    count: z.number(),
    companyServicePackage: z.object({
      name: z.string(),
      count: z.number(),
      price: z.number(),
      companyService: z.object({
        name: z.string(),
        type: z.nativeEnum(CompanyServiceType),
      }),
    }),
  })
);

export type MyPackagesResponse = z.infer<typeof MyPackagesResponseSchema>;

const fetchMyPackages = async (): Promise<MyPackagesResponse> => {
  const response = await apiRequest<MyPackagesResponse>({
    method: 'GET',
    url: PACKAGES_ENDPOINTS.MY_PACKAGES,
  });

  return MyPackagesResponseSchema.parse(response);
};

export default fetchMyPackages;
