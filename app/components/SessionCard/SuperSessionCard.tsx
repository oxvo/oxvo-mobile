import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

import {
  checkSessionExpiration,
  getBackgroundColor,
  getBorderColor,
  getFormattedStartDate,
  getSessionStatusText,
  getSessionTimeRange,
  getUserColor,
} from '@oxvo-mobile/components/SessionCard/helpers';

type SuperSessionCardProps = {
  counterPartUserFullName: string;
  userFullName: string;
  startDate: string;
  endDate: string;
  companyServiceName: string;
  userReply: string;
  counterPartUserReply: string;
};

const SuperSessionCard = ({
  userFullName,
  counterPartUserFullName,
  startDate,
  endDate,
  companyServiceName,
  userReply,
  counterPartUserReply,
}: SuperSessionCardProps) => {
  const isSessionExpired = checkSessionExpiration(endDate);
  const backgroundColor = getBackgroundColor(userReply, counterPartUserReply, isSessionExpired);
  const borderColor = getBorderColor(userReply, counterPartUserReply, isSessionExpired);
  const formattedStartDate = getFormattedStartDate(startDate);
  const sessionStatusText = getSessionStatusText({
    userFullName,
    counterPartUserFullName,
    userReply,
    counterPartUserReply,
  });
  const sessionTimeRange = getSessionTimeRange(startDate, endDate);
  const userColor = getUserColor(userReply);
  const counterPartUserColor = getUserColor(counterPartUserReply);
  console.log(
    'backgroundColor ->',
    backgroundColor,
    'borderColor ->',
    borderColor,
    'formattedStartDate ->',
    formattedStartDate,
    'sessionStatusText ->',
    sessionStatusText,
    'sessionTimeRange ->',
    sessionTimeRange,
    'companyServiceName ->',
    companyServiceName,
    'userColor ->',
    userColor,
    'counterPartUserColor ->',
    counterPartUserColor,
    'isSessionExpired ->',
    isSessionExpired
  );
  return <Text>SuperSessionCard</Text>;
};

export default memo(SuperSessionCard);
