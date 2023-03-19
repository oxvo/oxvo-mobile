const PRIVATE_ROUTES = {
  HOME: 'Home',
  EVENTS: 'Events',
  EVENT_DETAIL: 'EventDetail',
  CREATE_EVENT: 'CreateEvent',
  PROFILE: 'Profile',
  ACCOUNT_SETTINGS: 'AccountSettings',
  CHANGE_PASSWORD: 'ChangePassword',
  CALENDAR: 'Calendar',
  NOTIFICATIONS: 'Notifications',
  OVERVIEW: 'Overview',
  ADD_SERVICE: 'AddService',
};

const ROOT_ROUTES = {
  PRIVATE_STACK: 'PrivateStack',
  PUBLIC_STACK: 'PublicStack',
  TAB_STACK: 'TabStack',
};

const PUBLIC_ROUTES = {
  SIGN_IN: 'SignIn',
  SIGN_UP: 'SignUp',
  INVITE_CODE: 'InviteCode',
  FORGOT_PASSWORD: 'ForgotPassword',
};

const TAB_ROUTES = {
  HOME: `${PRIVATE_ROUTES.HOME}Tab`,
  CALENDAR: `${PRIVATE_ROUTES.CALENDAR}Tab`,
  NOTIFICATIONS: `${PRIVATE_ROUTES.NOTIFICATIONS}Tab`,
  OVERVIEW: `${PRIVATE_ROUTES.OVERVIEW}Tab`,
};

export { PRIVATE_ROUTES, ROOT_ROUTES, PUBLIC_ROUTES, TAB_ROUTES };
