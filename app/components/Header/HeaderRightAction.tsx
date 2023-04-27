import React, { memo } from 'react';

import { PrivateStackNavigationProp, PrivateStackParamList } from '@oxvo-mobile/navigation/types';

import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native-ui-lib';
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
  navigateRoute,
}: {
  title: string;
  navigateRoute: keyof PrivateStackParamList | any; // FIXME: any is not good here
}) => {
  const { navigate } = useNavigation<PrivateStackNavigationProp>();

  const handlePress = () => {
    console.log('navigateRoute', navigateRoute);
    if (navigateRoute) {
      navigate(navigateRoute);
    }
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

export default memo(HeaderRightAction);
