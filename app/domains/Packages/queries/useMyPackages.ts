import { PACKAGES_QUERY_KEYS } from '@oxvo-mobile/domains/Packages/constants/packages';
import fetchMyPackages, {
  MyPackagesResponse,
} from '@oxvo-mobile/domains/Packages/services/fetchMyPackages';

import { useQuery } from '@tanstack/react-query';

const useMyPackages = () => {
  return useQuery<MyPackagesResponse>({
    queryKey: [PACKAGES_QUERY_KEYS.FETCH_MY_PACKAGES],
    queryFn: async () => {
      const myPackagesData = await fetchMyPackages();

      return myPackagesData;
    },
  });
};

export default useMyPackages;
