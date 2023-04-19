import { HOME_QUERY_KEYS } from '@oxvo-mobile/domains/Home/constants/home';
import fetchHome, { HomeResponse } from '@oxvo-mobile/domains/Home/services/fetchHome';

import { useQuery } from '@tanstack/react-query';

const useHome = () =>
  useQuery<HomeResponse>({
    queryKey: [HOME_QUERY_KEYS.FETCH_HOME],
    queryFn: async () => {
      const homeData = await fetchHome();

      return homeData;
    },
  });

export default useHome;
