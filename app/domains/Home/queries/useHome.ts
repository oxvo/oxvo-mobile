import { HOME_QUERY_KEYS } from '@oxvo-mobile/domains/Home/constants/home';
import fetchHome, { HomeResponse } from '@oxvo-mobile/domains/Home/services/fetchHome';
import { useQuery } from '@tanstack/react-query';

const useHome = () => {
  return useQuery<HomeResponse>([HOME_QUERY_KEYS.FETCH_HOME], async () => {
    const homeData = await fetchHome();

    return homeData;
  });
};

export default useHome;
