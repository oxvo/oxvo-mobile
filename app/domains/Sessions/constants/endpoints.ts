enum SessionStatus {
  UPCOMING = 'upcoming',
  COMPLETED = 'completed',
  CANCELED = 'canceled',
}

const SESSION_ENDPOINTS = {
  MY_SESSIONS: 'v1/sessions',
  CREATE_SESSION: 'v1/sessions',
};

const sessionEndpointFunctions = {
  updateSession: (sessionId: string) => `v1/sessions/${sessionId}`,
  filterSessions: (status: SessionStatus) => `v1/events?status=${status}`,
  sessionDetail: (sessionId: string) => `v1/sessions/${sessionId}`,
};

const SessionEndpoints = {
  ...SESSION_ENDPOINTS,
  ...sessionEndpointFunctions,
};

export default SessionEndpoints;
