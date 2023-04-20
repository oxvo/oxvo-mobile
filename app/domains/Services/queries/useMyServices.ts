import { SERVICES_QUERY_KEYS } from '@oxvo-mobile/domains/Services/constants/services';
import fetchMyServices, {
  MyServicesResponse,
} from '@oxvo-mobile/domains/Services/services/fetchMyServices';

import { useQuery } from '@tanstack/react-query';

const useMyServices = () =>
  useQuery<MyServicesResponse>({
    queryKey: [SERVICES_QUERY_KEYS.FETCH_MY_SERVICES],
    queryFn: async () => {
      const myServicesData = await fetchMyServices();

      return myServicesData;
    },
  });

export default useMyServices;
