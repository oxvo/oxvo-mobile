enum UserRoles {
  STAFF = 'STAFF',
  CLIENT = 'CLIENT',
}
// TODO: we might think need move this to the session domain
enum SessionStatusType {
  JOIN = 'JOIN',
  AWAITING = 'AWAITING',
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
  STAFF_NOT_ATTEND = 'STAFF_NOT_ATTEND',
  CLIENT_NOT_ATTEND = 'CLIENT_NOT_ATTEND',
}
enum CompanyType {
  GYM = 'GYM',
  HEALTH = 'HEALTH',
  EDUCATION = 'EDUCATION',
}

enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  TRY = 'TRY',
}

enum CompanyServiceType {
  WORKOUT = 'WORKOUT',
  MEETING = 'MEETING',
  ONLINE = 'ONLINE',
}

export { Currency, CompanyType, UserRoles, SessionStatusType, CompanyServiceType };
