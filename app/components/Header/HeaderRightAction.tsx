import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native-ui-lib';

import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

const HeaderRightActionContainer = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const HeaderRightActionText = styled(({ ...props }) => {
  return <Text {...props} />;
})`
  margin-top: 4px;
`;

const HeaderRightAction = ({
  title,

  onNavigate,
}: {
  title: string;
  onNavigate?: () => void;
}) => {
  const handlePress = () => {
    onNavigate?.();
  };

  return (
    <TouchableOpacity hitSlop={{ top: 15, bottom: 15, left: 20, right: 20 }} onPress={handlePress}>
      <HeaderRightActionContainer>
        <AntDesign name="pluscircleo" size={24} color="black" />
        <HeaderRightActionText>{title}</HeaderRightActionText>
      </HeaderRightActionContainer>
    </TouchableOpacity>
  );
};

export default HeaderRightAction;
