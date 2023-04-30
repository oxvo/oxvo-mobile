import { SessionStatusType } from '@oxvo-mobile/constants/oxvo';

const checkSessionExpiration = (endDate: string): boolean => {
  const now = new Date();
  const sessionEndDate = new Date(endDate);

  return now > sessionEndDate;
};

const getFormattedStartDate = (startDate: string): string => {
  const sessionStartDate = new Date(startDate);
  return sessionStartDate.toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const getSessionTimeRange = (startDate: string, endDate: string): string => {
  const sessionStartDate = new Date(startDate);
  const sessionEndDate = new Date(endDate);
  const startTime = sessionStartDate.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
  const endTime = sessionEndDate.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `${startTime} - ${endTime}`;
};

const getUserColor = (status: string): string => {
  switch (status) {
    case SessionStatusType.JOIN:
      return 'green';
    case SessionStatusType.AWAITING:
      return 'yellow';
    case SessionStatusType.CANCELED:
      return 'red';
    case SessionStatusType.STAFF_NOT_ATTEND:
    case SessionStatusType.CLIENT_NOT_ATTEND:
      return 'gray';
    default:
      return 'gray';
  }
};

const getBackgroundColor = (
  userReply: string,
  counterPartUserReply: string,
  isSessionExpired: boolean
): string => {
  if (!isSessionExpired) {
    return 'white';
  }

  if (
    userReply === SessionStatusType.STAFF_NOT_ATTEND ||
    counterPartUserReply === SessionStatusType.STAFF_NOT_ATTEND ||
    userReply === SessionStatusType.CLIENT_NOT_ATTEND ||
    counterPartUserReply === SessionStatusType.CLIENT_NOT_ATTEND
  ) {
    return 'gray';
  }
  if (
    userReply === SessionStatusType.COMPLETED &&
    counterPartUserReply === SessionStatusType.COMPLETED
  ) {
    return 'green';
  }

  return 'gray';
};

const getBorderColor = (
  userReply: string,
  counterPartUserReply: string,
  isSessionExpired: boolean
): string | null => {
  if (isSessionExpired) {
    return null;
  }

  if (
    userReply === SessionStatusType.CANCELED ||
    counterPartUserReply === SessionStatusType.CANCELED
  ) {
    return 'red';
  }

  if (
    userReply === SessionStatusType.AWAITING ||
    counterPartUserReply === SessionStatusType.AWAITING
  ) {
    return 'yellow';
  }

  if (userReply === SessionStatusType.JOIN && counterPartUserReply === SessionStatusType.JOIN) {
    return 'green';
  }

  return null;
};

type GetSessionStatusTextProps = {
  userReply: string;
  counterPartUserReply: string;
  userFullName: string;
  counterPartUserFullName: string;
};

const getSessionStatusText = ({
  userReply,
  counterPartUserReply,
  userFullName,
  counterPartUserFullName,
}: GetSessionStatusTextProps): string => {
  if (userReply === SessionStatusType.JOIN) {
    return `${userFullName}, bu oturuma katılacağını onayladı.`;
  }

  if (counterPartUserReply === SessionStatusType.JOIN) {
    return `${counterPartUserFullName}, bu oturuma katılacağını onayladı.`;
  }

  if (userReply === SessionStatusType.AWAITING) {
    return `${userFullName}, henüz oturuma katılım hakkında bilgi sağlamadı.`;
  }

  if (counterPartUserReply === SessionStatusType.AWAITING) {
    return `${counterPartUserFullName}, henüz oturuma katılım hakkında bilgi sağlamadı.`;
  }

  if (userReply === SessionStatusType.CANCELED) {
    return `${userFullName}, bu oturumu iptal etti.`;
  }

  if (counterPartUserReply === SessionStatusType.CANCELED) {
    return `${counterPartUserFullName}, bu oturumu iptal etti.`;
  }

  if (
    userReply === SessionStatusType.STAFF_NOT_ATTEND ||
    userReply === SessionStatusType.CLIENT_NOT_ATTEND
  ) {
    return `${userFullName}, bu oturumu ${counterPartUserFullName} katılmadı olarak işaretledi`;
  }

  if (
    counterPartUserReply === SessionStatusType.STAFF_NOT_ATTEND ||
    counterPartUserReply === SessionStatusType.CLIENT_NOT_ATTEND
  ) {
    return `${counterPartUserFullName}, bu oturumu ${userFullName} katılmadı olarak işaretledi`;
  }

  if (userReply === SessionStatusType.COMPLETED) {
    return `${userFullName}, bu oturumu tamamlandı olarak işaretledi.`;
  }

  if (counterPartUserReply === SessionStatusType.COMPLETED) {
    return `${counterPartUserFullName}, bu oturumu tamamlandı olarak işaretledi.`;
  }

  return '';
};

export {
  getSessionStatusText,
  getBorderColor,
  getBackgroundColor,
  getUserColor,
  checkSessionExpiration,
  getSessionTimeRange,
  getFormattedStartDate,
};
