import { USER_ROLES } from '@oxvo-mobile/constants/global';
import { ME_QUERY_KEYS } from '@oxvo-mobile/domains/Me/constants/global';
import { MeResponse } from '@oxvo-mobile/domains/Me/services/fetchMe';
import { useQueryClient } from '@tanstack/react-query';

const getCurrentUserRole = () => {
  const queryClient = useQueryClient();
  const meQuery = queryClient.getQueryData<MeResponse>([ME_QUERY_KEYS.FETCH_ME]);

  return (meQuery as MeResponse).role as USER_ROLES;
};

export default getCurrentUserRole;
