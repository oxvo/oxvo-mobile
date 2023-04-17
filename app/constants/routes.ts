const enum PRIVATE_ROUTES {
  HOME = 'Home',
  EVENTS = 'Events',
  EVENT_DETAIL = 'EventDetail',
  CREATE_EVENT = 'CreateEvent',
  PROFILE = 'Profile',
  ACCOUNT_SETTINGS = 'AccountSettings',
  CHANGE_PASSWORD = 'ChangePassword',
  CALENDAR = 'Calendar',
  NOTIFICATIONS = 'Notifications',
  OVERVIEW = 'Overview',
  ADD_SERVICE = 'AddService',
}

const enum ROOT_ROUTES {
  PRIVATE_STACK = 'PrivateStack',
  PUBLIC_STACK = 'PublicStack',
  TAB_STACK = 'TabStack',
}

const enum PUBLIC_ROUTES {
  SIGN_IN = 'SignIn',
  SIGN_UP = 'SignUp',
  INVITE_CODE = 'InviteCode',
  FORGOT_PASSWORD = 'ForgotPassword',
}

const enum BOTTOM_TAB_ROUTES {
  HOME = 'HomeBottomTab',
  CALENDAR = 'CalendarBottomTab',
  NOTIFICATIONS = 'NotificationsBottomTab',
  OVERVIEW = 'OverviewBottomTab',
}

export { PRIVATE_ROUTES, ROOT_ROUTES, PUBLIC_ROUTES, BOTTOM_TAB_ROUTES };
