import { USER_QUERY_KEYS } from '@oxvo-mobile/domains/User/constants/user';

import fetchMyStaffs, { MyStaffsResponse } from '@oxvo-mobile/domains/User/services/fetchMyStaffs';
import { useQuery } from '@tanstack/react-query';

const useMyStaffs = () =>
  useQuery<MyStaffsResponse>({
    queryKey: [USER_QUERY_KEYS.FETCH_MY_STAFFS],
    queryFn: async () => {
      const myStaffsData = await fetchMyStaffs();

      return myStaffsData;
    },
  });

export default useMyStaffs;
