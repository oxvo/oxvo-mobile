// enum SessionStatus {
//   UPCOMING = 'upcoming',
//   COMPLETED = 'completed',
//   CANCELED = 'canceled',
// }
// TODO: I don't know it's right type or not
import { SessionStatusType } from '@oxvo-mobile/constants/oxvo';

const SESSION_ENDPOINTS = {
  MY_SESSIONS: 'v1/sessions', // GET
  CREATE_SESSION: 'v1/sessions', // POST
  UPDATE_SESSION: 'v1/sessions', // PUT
  UPDATE_SESSION_REPLY: 'v1/sessions', // PATCH
  FILTER_SESSIONS: 'v1/sessions', // GET
  SESSION_DETAIL: 'v1/sessions', // GET
};

const sessionEndpointFunctions = {
  updateSession: (sessionId: string) => `${SESSION_ENDPOINTS.UPDATE_SESSION}/${sessionId}`,
  filterSessions: (status: SessionStatusType) => {
    const url = new URL(SESSION_ENDPOINTS.FILTER_SESSIONS);
    const params = new URLSearchParams({ status });
    url.search = params.toString();

    return url.toString();
  },
  sessionDetail: (sessionId: string) => `${SESSION_ENDPOINTS.SESSION_DETAIL}/${sessionId}`,
};

const SessionEndpoints = {
  ...SESSION_ENDPOINTS,
  ...sessionEndpointFunctions,
};

export default SessionEndpoints;
