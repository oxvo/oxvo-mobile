import { SESSIONS_QUERY_KEYS } from '@oxvo-mobile/domains/Sessions/constants/sessions';
import fetchSessionDetail, {
  SessionDetailPayload,
  SessionDetailResponse,
} from '@oxvo-mobile/domains/Sessions/services/fetchSessionDetail';

import { useQuery } from '@tanstack/react-query';

const useSessionDetails = (sessionId: SessionDetailPayload) =>
  useQuery<SessionDetailResponse>({
    queryKey: [SESSIONS_QUERY_KEYS.FETCH_SESSION_DETAIL, sessionId],
    queryFn: async () => {
      const sessionDetailData = await fetchSessionDetail(sessionId);

      return sessionDetailData;
    },
  });

export default useSessionDetails;
