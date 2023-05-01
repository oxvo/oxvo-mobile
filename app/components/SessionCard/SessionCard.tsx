import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-ui-lib';

import colors from '@oxvo-mobile/assets/colors.json';

import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 4px;
  border-radius: 8px;
  width: 100%;
  height: 84px;
  background-color: black;
  border: 1px solid #f6f6f6;
  overflow: hidden;
  flex: 1;
`;

const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Content = styled.View`
  margin-top: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const CompanyServiceText = styled.Text`
  font-size: 12px;
  font-weight: 600;
`;

const StatusText = styled.Text`
  font-size: 8px;
  font-weight: 600;
`;

const DateText = styled.Text`
  font-size: 10px;
  font-weight: 300;
`;

const Square = styled.View`
  width: 15px;
  height: 15px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  }};
`;

const StatusContainer = styled.View`
  margin-top: 4px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 4px;
  width: 150px;
`;

const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const DateContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
`;

type CurrentUserStatusType = 'join' | 'awaiting' | 'canceled';
type CounterPartStatusType = 'completed' | 'not-attend';

// before session
// join (left green), awaiting (left yellow), canceled (left red)
// after session
// completed (all green), not attended (all gray)

// staff im
// join gelirse staff reply beni yesil yap

const SessionCard = ({
  currentUserStatus,
  counterPartUserRoleName,
  counterPartStatus,
  serviceName,
  fullName,
}: any) => {
  console.log('currentUserStatus, counterPartStatus', currentUserStatus, counterPartStatus);
  const getCurrentUserStatusText = (status: CurrentUserStatusType) => {
    switch (status) {
      case 'completed':
        return 'Client 01 Tamamladı';
      case 'join':
        return 'Client 02 Katılıyor';
      case 'awaiting':
        return 'Onay Bekleniyor';
      case 'canceled':
        return 'Client 02 İptal Etti';
      case 'not-attend': // if staff - staff not attend gelmeyecek
        return 'Client 02 Katılmadı';
      default:
        return 'Bekliyor';
    }
  };
  const getCounterPartStatusText = (status: CounterPartStatusType) => {
    switch (status) {
      case 'completed':
        return 'Tamamlandı';
      case 'not-attend':
        return 'Katılmadı'; // aynisi
      default:
        return 'Bekliyor';
    }
  };
  const getCurrentUserStatusColor = (status: CurrentUserStatusType) => {
    // console.log('!!!!@@@@@@@@@@@@@@@', status);
    switch (status) {
      case 'join':
      case 'completed':
        return colors.supports.green;
      case 'awaiting':
        return colors.supports.yellow;
      case 'not-attend':
        return colors.grays.gray;
      case 'canceled':
        return colors.supports.red;
      default:
        return colors.supports.yellow;
    }
  };
  console.log(getCurrentUserStatusColor(currentUserStatus));
  const getCounterPartStatusColor = (status: CounterPartStatusType) => {
    switch (status) {
      case 'completed':
        return colors.supports.green;
      case 'not-attend':
        return colors.grays.gray;
      default:
        return colors.supports.yellow;
    }
  };
  return (
    <TouchableOpacity>
      <Container status="">
        <Top>
          <CompanyServiceText>{serviceName}</CompanyServiceText>
          <DateContainer>
            <Text>16:30 - 17:30</Text>
            <DateText>16.01.2023</DateText>
          </DateContainer>
        </Top>
        <Content>
          <Text>{fullName}</Text>
        </Content>

        <BottomContainer>
          <StatusContainer>
            <Square backgroundColor={getCurrentUserStatusColor(currentUserStatus)} />
            <StatusText>{getCurrentUserStatusText(currentUserStatus).toUpperCase()}</StatusText>
          </StatusContainer>
          {/* <StatusContainer>
            <Square backgroundColor={getCounterPartStatusColor(counterPartStatus)} />
            <StatusText>
              {counterPartUserRoleName} STATUS:{' '}
              {getCounterPartStatusText(counterPartStatus).toUpperCase()}
            </StatusText>
          </StatusContainer> */}
        </BottomContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(SessionCard);
