import React, { memo } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-ui-lib';

import {
  checkSessionExpiration,
  getBackgroundColor,
  getBorderColor,
  getFormattedStartDate,
  getSessionStatusText,
  getSessionTimeRange,
  getUserColor,
  getUserImageUrl,
} from '@oxvo-mobile/components/SessionCard/SuperSessionCard.helpers';

import styled from 'styled-components/native';

type SuperSessionCardProps = {
  counterPartUserFullName: string;
  userFullName: string;
  startDate: string;
  endDate: string;
  companyServiceName: string;
  userReply: string;
  counterPartUserReply: string;
  onPress: () => void;
};

const Container = styled.View`
  overflow: hidden;
  padding: 12px 24px;
  background-color: ${(props) => props.backgroundColor};
`;

const RoundedImage = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 24px;
  border: 2px solid ${(props) => props.borderColor};
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContent = styled.View`
  width: 180px;
  row-gap: 12px;
`;

const RightContent = styled.View``;

const SessionStatusTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`;

const TextWrapper = styled.View`
  width: 100px;
  row-gap: 8px;
  align-items: flex-end;
`;

const SuperSessionCard = ({
  userFullName,
  counterPartUserFullName,
  startDate,
  endDate,
  companyServiceName,
  userReply,
  onPress,
  counterPartUserReply,
}: SuperSessionCardProps) => {
  const isSessionExpired = checkSessionExpiration(endDate);
  const backgroundColor = getBackgroundColor(userReply, counterPartUserReply, isSessionExpired);
  const borderColor = getBorderColor(userReply, counterPartUserReply, isSessionExpired);
  const formattedStartDate = getFormattedStartDate(startDate);
  const { counterPartUserSessionStatusText, userSessionStatusText } = getSessionStatusText({
    userFullName,
    counterPartUserFullName,
    userReply,
    counterPartUserReply,
  });
  const sessionTimeRange = getSessionTimeRange(startDate, endDate);
  const userColor = getUserColor(userReply);
  const counterPartUserColor = getUserColor(counterPartUserReply);
  const userImageUrl = getUserImageUrl(userFullName);
  const counterPartUserImageUrl = getUserImageUrl(counterPartUserFullName);

  return (
    <TouchableOpacity onPress={onPress}>
      <Container borderColor={borderColor} backgroundColor={backgroundColor}>
        <Content>
          <LeftContent>
            <SessionStatusTextContainer>
              <RoundedImage borderColor={userColor} source={{ uri: userImageUrl }} />
              <Text style={{ fontSize: 10, fontWeight: 300, lineHeight: 16 }}>
                {userSessionStatusText}
              </Text>
            </SessionStatusTextContainer>
            <SessionStatusTextContainer>
              <RoundedImage
                borderColor={counterPartUserColor}
                source={{ uri: counterPartUserImageUrl }}
              />
              <Text style={{ fontSize: 10, fontWeight: 300, lineHeight: 16 }}>
                {counterPartUserSessionStatusText}
              </Text>
            </SessionStatusTextContainer>
          </LeftContent>
          <RightContent>
            <TextWrapper>
              <Text style={{ fontSize: 10, fontWeight: 300 }}>{sessionTimeRange}</Text>
              <Text style={{ fontSize: 10, fontWeight: 300 }}>{formattedStartDate}</Text>
              <Text style={{ fontSize: 10, fontWeight: 300 }}>{companyServiceName}</Text>
            </TextWrapper>
          </RightContent>
        </Content>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(SuperSessionCard);
