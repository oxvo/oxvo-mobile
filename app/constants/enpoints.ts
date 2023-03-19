enum EventsStatusType {
  upcoming = 'upcoming',
  completed = 'completed',
  canceled = 'canceled',
}

const AUTH_ENDPOINTS = {
  SIGN_IN: 'v1/auth/sign-in',
  SIGN_UP: 'v1/auth/sign-up',
  INVITE_CODE: 'v1/auth/invite-code',
  FORGOT_PASSWORD: 'v1/auth/forgot-password',
};

const CALENDAR_ENDPOINTS = {
  SEARCH: (startTime: Date, staffId: string) =>
    `v1/calendar?start_time=${startTime}&staffId=${staffId}`,
};

const DASHBOARD_ENDPOINTS = {
  FETCH_DASHBOARD: 'v1/dashboard',
};

const EVENTS_ENDPOINTS = {
  MY_EVENTS: 'v1/events',
  FILTER_EVENTS: (status: EventsStatusType) => `v1/events?status=${status}`, // upcoming | completed | canceled
  DETAIL: (eventId: string) => `v1/events/${eventId}`,
  CREATE_EVENT: 'v1/events',
  UPDATE_EVENT: 'v1/events',
};

const NOTIFICATIONS_ENDPOINTS = {
  MY_NOTIFICATIONS: 'v1/notifications',
};

const PACKAGES_ENDPOINTS = {
  MY_PACKAGES: 'v1/packages',
};

const SERVICES_ENDPOINTS = {
  ALL_SERVICES: 'v1/services',
  MY_SERVICES: 'v1/services/my-services',
  ADD_SERVICE: 'v1/services',
};

const USER_ENDPOINTS = {
  UPDATE_PROFILE: 'v1/user/profile',
  CHANGE_PASSWORD: 'v1/user/change-password',
  GET_CREDENTIALS: 'v1/user/credentials',
};
