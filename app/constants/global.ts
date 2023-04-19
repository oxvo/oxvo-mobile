enum UserRoles {
  STAFF = 'STAFF',
  CLIENT = 'CLIENT',
}

enum ReplyStatus {
  JOIN = 'JOIN',
  AWAITING = 'AWAITING',
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
  STAFF_NOT_ATTEND = 'STAFF_NOT_ATTEND',
  CLIENT_NOT_ATTEND = 'CLIENT_NOT_ATTEND',
}

enum CompanyServiceType {
  WORKOUT = 'WORKOUT',
  MEETING = 'MEETING',
}

export { UserRoles, ReplyStatus, CompanyServiceType };
