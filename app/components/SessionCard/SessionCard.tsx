import React, { memo } from 'react';
import { Text, View } from 'react-native';

import colors from '@oxvo-mobile/assets/colors.json';

import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 4px;
  border-radius: 8px;
  width: 100%;
  height: 64px;
  background-color: #f7f5eb;
  border: 1px solid #e5e5e5;
`;

const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CompanyServiceText = styled.Text`
  font-size: 12px;
  font-weight: 600;
`;

const DateText = styled.Text`
  font-size: 8px;
  font-weight: 300;
`;

// before session
// join (left green), awaiting (left yellow), canceled (left red)
// after session
// completed (all green), not attended (all gray)

const SessionCard = () => {
  return (
    <Container>
      <Top>
        <CompanyServiceText>Pilates</CompanyServiceText>
        <Text>16:30 - 17:30</Text>
      </Top>
      <Content>
        <Text>Peter Stan</Text>
        <DateText>16.01.2023</DateText>
      </Content>
      <Text>Hello</Text>
    </Container>
  );
};

export default memo(SessionCard);
