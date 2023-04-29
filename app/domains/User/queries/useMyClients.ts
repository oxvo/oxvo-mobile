import { USER_QUERY_KEYS } from '@oxvo-mobile/domains/User/constants/user';

import fetchMyClients, {
  MyClientsResponse,
} from '@oxvo-mobile/domains/User/services/fetchMyClients';
import { useQuery } from '@tanstack/react-query';

const useMyClients = () =>
  useQuery<MyClientsResponse>({
    queryKey: [USER_QUERY_KEYS.FETCH_MY_CLIENTS],
    queryFn: async () => {
      const myClientsData = await fetchMyClients();

      return myClientsData;
    },
  });

export default useMyClients;
