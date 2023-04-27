import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native-ui-lib';

import RoundedImage from '@oxvo-mobile/components/RoundedImage/RoundedImage';

import { PrivateStackNavigationProp } from '@oxvo-mobile/navigation/types';

import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const HeaderProfileContainer = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const HeaderProfileText = styled(({ ...props }) => {
  return <Text {...props} />;
})`
  margin-top: 4px;
`;

export enum HeaderLeftActionType {
  GO_BACK = 'go-back',
  PROFILE = 'profile',
}

// TODO: change component name to HeaderLeftAction

type HeaderLeftActionProps = {
  action?: HeaderLeftActionType;
  // eslint-disable-next-line react/require-default-props
  navigateRoute?: any; // FIXME: any is not good here
};

const HeaderProfile = ({ action, navigateRoute }: HeaderLeftActionProps) => {
  const { goBack, canGoBack, navigate } = useNavigation<
    PrivateStackNavigationProp & BottomTabBarButtonProps
  >();

  if (HeaderLeftActionType.GO_BACK === action) {
    return (
      <TouchableOpacity
        hitSlop={{ top: 15, bottom: 15, left: 20, right: 20 }}
        onPress={() => {
          if (navigateRoute) {
            navigate(navigateRoute);
          } else if (canGoBack()) {
            goBack();
          }
        }}
      >
        <Ionicons name="ios-arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
    );
  }
  const handlePress = () => {
    navigate(PRIVATE_ROUTES.PROFILE.PROFILE_NAVIGATOR, {
      screen: PRIVATE_ROUTES.PROFILE.PROFILE_HOME,
    });
  };

  return (
    <TouchableOpacity hitSlop={{ top: 15, bottom: 15, left: 20, right: 20 }} onPress={handlePress}>
      <HeaderProfileContainer>
        <RoundedImage />
        <HeaderProfileText>Profile</HeaderProfileText>
      </HeaderProfileContainer>
    </TouchableOpacity>
  );
};

HeaderProfile.defaultProps = {
  action: HeaderLeftActionType.PROFILE,
};

export default memo(HeaderProfile);
