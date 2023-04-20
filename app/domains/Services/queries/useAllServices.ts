import { SERVICES_QUERY_KEYS } from '@oxvo-mobile/domains/Services/constants/services';
import fetchAllServices, {
  AllServicesResponse,
} from '@oxvo-mobile/domains/Services/services/fetchAllServices';

import { useQuery } from '@tanstack/react-query';

const useAllServices = () =>
  useQuery<AllServicesResponse>({
    queryKey: [SERVICES_QUERY_KEYS.FETCH_ALL_SERVICES],
    queryFn: async () => {
      const allServicesData = await fetchAllServices();

      return allServicesData;
    },
  });

export default useAllServices;
