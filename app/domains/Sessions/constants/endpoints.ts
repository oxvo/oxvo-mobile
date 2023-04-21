import { SessionStatusType } from '@oxvo-mobile/constants/oxvo';

const SESSION_ENDPOINTS = {
  // Endpoint created with a function
  UPDATE_SESSION_REPLY: 'v1/sessions', // PATCH
  UPDATE_SESSION: 'v1/sessions', // PUT
  FILTERABLE_SESSIONS: 'v1/sessions', // GET
  SESSION_DETAIL: 'v1/sessions', // GET
  // A constant endpoint
  CREATE_SESSION: 'v1/sessions', // POST
};

enum FilteredSessionStatusType {
  CANCELED = SessionStatusType.CANCELED,
  COMPLETED = SessionStatusType.COMPLETED,
  AWAITING = SessionStatusType.AWAITING,
}

type UpdateSessionReplyType = {
  sessionId: string;
  sessionReply: SessionStatusType;
};

const sessionEndpointFunctions = {
  updateSessionReply: ({ sessionId, sessionReply }: UpdateSessionReplyType) => {
    /**
     * @example
     * PATCH /v1/sessions/:sessionId/update-reply?updateReply=sessionReply
     */

    const url = new URL(SESSION_ENDPOINTS.UPDATE_SESSION_REPLY);
    url.pathname = `/${sessionId}`;
    url.pathname = '/update-reply';

    const params = new URLSearchParams({ updateReply: sessionReply });
    url.search = params.toString();

    return url.toString();
  },
  updateSession: (sessionId: string) => `${SESSION_ENDPOINTS.UPDATE_SESSION}/${sessionId}`,
  filterableSessions: (status?: FilteredSessionStatusType) => {
    /**
     * @example
     * GET /v1/sessions
     * GET /v1/sessions?status=FilteredSessionStatusType
     */

    const url = new URL(SESSION_ENDPOINTS.FILTERABLE_SESSIONS);

    if (status) {
      const params = new URLSearchParams({ status });
      url.search = params.toString();
    }

    return url.toString();
  },
  sessionDetail: (sessionId: string) => `${SESSION_ENDPOINTS.SESSION_DETAIL}/${sessionId}`,
};

const SessionEndpoints = {
  ...SESSION_ENDPOINTS,
  ...sessionEndpointFunctions,
};

export default SessionEndpoints;
