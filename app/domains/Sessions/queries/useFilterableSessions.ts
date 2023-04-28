import { SESSIONS_QUERY_KEYS } from '@oxvo-mobile/domains/Sessions/constants/sessions';
import fetchFilterableSessions, {
  FilterableSessionsPayload,
  FilterableSessionsResponse,
} from '@oxvo-mobile/domains/Sessions/services/fetchFilterableSessions';

import { useQuery } from '@tanstack/react-query';

const useFilterableSessions = (status?: FilterableSessionsPayload) =>
  useQuery<FilterableSessionsResponse>({
    queryKey: [SESSIONS_QUERY_KEYS.FETCH_FILTERABLE_SESSIONS, status],
    queryFn: async () => {
      const filterableSessionsData = await fetchFilterableSessions(status);

      return filterableSessionsData;
    },
  });

export default useFilterableSessions;
