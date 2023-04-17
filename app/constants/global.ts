enum USER_TYPES {
  STAFF = 'STAFF',
  CLIENT = 'CLIENT',
}

enum STORAGE_KEYS { //TODO move Auth keys to Auth/constants/global.ts
  TOKEN = 'auth-token',
  CODE = 'invite-code',
}

export { USER_TYPES, STORAGE_KEYS };
