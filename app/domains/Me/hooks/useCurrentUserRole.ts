import { ME_QUERY_KEYS } from '@oxvo-mobile/domains/Me/constants/global';
import { MeResponse } from '@oxvo-mobile/domains/Me/services/fetchMe';

import { UserRoles } from '@oxvo-mobile/constants/oxvo';

import { useQueryClient } from '@tanstack/react-query';

const useCurrentUserRole = (): UserRoles => {
  const queryClient = useQueryClient();
  const meQuery = queryClient.getQueryData<MeResponse>([ME_QUERY_KEYS.FETCH_ME]);

  return meQuery?.role as UserRoles;
};

export default useCurrentUserRole;
