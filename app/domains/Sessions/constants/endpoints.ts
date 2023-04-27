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

export enum FilteredSessionStatusType {
  CANCELED = SessionStatusType.CANCELED,
  COMPLETED = SessionStatusType.COMPLETED,
  AWAITING = SessionStatusType.AWAITING,
}

type UpdateSessionReplyType = {
  sessionId: number;
  sessionReply: SessionStatusType;
};

const sessionEndpointFunctions = {
  updateSessionReply: ({ sessionId, sessionReply }: UpdateSessionReplyType) => {
    /**
     * @example
     * PATCH /v1/sessions/:sessionId/update-reply?updateReply=sessionReply
     */

    const path = `${SESSION_ENDPOINTS.UPDATE_SESSION_REPLY}/${sessionId}/update-reply`;
    const queryParams = new URLSearchParams({ updateReply: sessionReply }).toString();

    return `${path}?${queryParams}`;
  },
  updateSession: (sessionId: number) => `${SESSION_ENDPOINTS.UPDATE_SESSION}/${sessionId}`,
  fetchFilterableSessions: (status?: FilteredSessionStatusType) => {
    /**
     * @example
     * GET /v1/sessions
     * GET /v1/sessions?status=FilteredSessionStatusType
     */

    const path = SESSION_ENDPOINTS.FILTERABLE_SESSIONS;

    if (status) {
      const queryParams = new URLSearchParams({ status }).toString();
      return `${path}?${queryParams}`;
    }

    return path;
  },
  fetchSessionDetail: (sessionId: number) => `${SESSION_ENDPOINTS.SESSION_DETAIL}/${sessionId}`,
};

const SessionEndpoints = {
  ...SESSION_ENDPOINTS,
  ...sessionEndpointFunctions,
};

export default SessionEndpoints;
