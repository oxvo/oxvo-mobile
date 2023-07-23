import { UserRoles } from '@oxvo-mobile/constants/oxvo';

type UserData = {
  staff: {
    firstName: string;
    lastName: string;
  };
  client: {
    firstName: string;
    lastName: string;
  };
};

const getFullNameByUserRole = (
  data: UserData,
  currentUserRole: UserRoles
): { userFullName: string; counterPartUserFullName: string } => {
  const reverseMap: Record<UserRoles, UserRoles> = {
    CLIENT: UserRoles.STAFF,
    STAFF: UserRoles.CLIENT,
  };

  const userFullName = `${
    data[UserRoles[currentUserRole].toLowerCase() as keyof UserData].firstName
  } ${data[UserRoles[currentUserRole].toLowerCase() as keyof UserData].lastName}`;

  const counterPartUserFullName = `${
    data[reverseMap[UserRoles[currentUserRole]].toLowerCase() as keyof UserData].firstName
  } ${data[reverseMap[UserRoles[currentUserRole]].toLowerCase() as keyof UserData].lastName}`;

  return { userFullName, counterPartUserFullName };
};

type Session = {
  staffReply: string;
  clientReply: string;
};

const getReplyByUserRole = (
  session: Session,
  currentUserRole: UserRoles
): { userReply: string; counterPartUserReply: string } => {
  if (currentUserRole === UserRoles.STAFF) {
    return { userReply: session.staffReply, counterPartUserReply: session.clientReply };
  }
  if (currentUserRole === UserRoles.CLIENT) {
    return { userReply: session.clientReply, counterPartUserReply: session.staffReply };
  }

  return { userReply: '', counterPartUserReply: '' };
};

export { getReplyByUserRole, getFullNameByUserRole };
