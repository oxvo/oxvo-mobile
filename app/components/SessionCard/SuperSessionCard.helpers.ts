import colors from '@oxvo-mobile/assets/colors.json';

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
      return colors.base.blue;
    case SessionStatusType.AWAITING:
      return colors.supports.yellow;
    case SessionStatusType.CANCELED:
      return colors.supports.red;
    case SessionStatusType.COMPLETED:
      return colors.supports.green;
    case SessionStatusType.STAFF_NOT_ATTEND:
    case SessionStatusType.CLIENT_NOT_ATTEND:
      return 'black';
    default:
      return colors.grays.gray;
  }
};

const getBackgroundColor = (
  userReply: string,
  counterPartUserReply: string,
  isSessionExpired: boolean
): string => {
  if (!isSessionExpired) {
    return colors.base.white;
  }

  if (
    userReply === SessionStatusType.STAFF_NOT_ATTEND ||
    counterPartUserReply === SessionStatusType.STAFF_NOT_ATTEND ||
    userReply === SessionStatusType.CLIENT_NOT_ATTEND ||
    counterPartUserReply === SessionStatusType.CLIENT_NOT_ATTEND
  ) {
    return colors.base.white;
  }
  if (
    userReply === SessionStatusType.COMPLETED &&
    counterPartUserReply === SessionStatusType.COMPLETED
  ) {
    // return colors.supports.green;
  }

  return colors.base.white;
};

const getBorderColor = (
  userReply: string,
  counterPartUserReply: string,
  isSessionExpired: boolean
): string | null => {
  if (isSessionExpired) {
    // return 'black';
  }

  if (
    userReply === SessionStatusType.CANCELED &&
    counterPartUserReply === SessionStatusType.CANCELED
  ) {
    return colors.supports.red;
  }

  if (
    userReply === SessionStatusType.AWAITING &&
    counterPartUserReply === SessionStatusType.AWAITING
  ) {
    return colors.supports.yellow;
  }

  if (userReply === SessionStatusType.JOIN && counterPartUserReply === SessionStatusType.JOIN) {
    return colors.supports.green;
  }

  if (
    userReply === SessionStatusType.COMPLETED &&
    counterPartUserReply === SessionStatusType.COMPLETED
  ) {
    return colors.base.blue;
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
}: GetSessionStatusTextProps) => {
  let userSessionStatusText;
  let counterPartUserSessionStatusText;

  if (userReply === SessionStatusType.JOIN) {
    userSessionStatusText = `${userFullName}, bu oturuma katılacağını onayladı.`;
  }

  if (counterPartUserReply === SessionStatusType.JOIN) {
    counterPartUserSessionStatusText = `${counterPartUserFullName}, bu oturuma katılacağını onayladı.`;
  }

  if (userReply === SessionStatusType.AWAITING) {
    userSessionStatusText = `${userFullName}, henüz oturuma katılım hakkında bilgi sağlamadı.`;
  }

  if (counterPartUserReply === SessionStatusType.AWAITING) {
    counterPartUserSessionStatusText = `${counterPartUserFullName}, henüz oturuma katılım hakkında bilgi sağlamadı.`;
  }

  if (userReply === SessionStatusType.CANCELED) {
    userSessionStatusText = `${userFullName}, bu oturumu iptal etti.`;
  }

  if (counterPartUserReply === SessionStatusType.CANCELED) {
    counterPartUserSessionStatusText = `${counterPartUserFullName}, bu oturumu iptal etti.`;
  }

  if (
    userReply === SessionStatusType.STAFF_NOT_ATTEND ||
    userReply === SessionStatusType.CLIENT_NOT_ATTEND
  ) {
    userSessionStatusText = `${userFullName}, bu oturumu ${counterPartUserFullName} katılmadı olarak işaretledi`;
  }

  if (
    counterPartUserReply === SessionStatusType.STAFF_NOT_ATTEND ||
    counterPartUserReply === SessionStatusType.CLIENT_NOT_ATTEND
  ) {
    counterPartUserSessionStatusText = `${counterPartUserFullName}, bu oturumu ${userFullName} katılmadı olarak işaretledi`;
  }

  if (userReply === SessionStatusType.COMPLETED) {
    userSessionStatusText = `${userFullName}, bu oturumu tamamlandı olarak işaretledi.`;
  }

  if (counterPartUserReply === SessionStatusType.COMPLETED) {
    counterPartUserSessionStatusText = `${counterPartUserFullName}, bu oturumu tamamlandı olarak işaretledi.`;
  }

  return { userSessionStatusText, counterPartUserSessionStatusText };
};

const getUserImageUrl = (fullName: string): string => {
  return `https://ui-avatars.com/api/?name=${fullName}`;
};

export {
  getUserImageUrl,
  getSessionStatusText,
  getBorderColor,
  getBackgroundColor,
  getUserColor,
  checkSessionExpiration,
  getSessionTimeRange,
  getFormattedStartDate,
};
