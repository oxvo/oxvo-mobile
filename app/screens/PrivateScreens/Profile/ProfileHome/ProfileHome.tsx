import React from 'react';
import { Button, Text, View } from 'react-native-ui-lib';

import { PrivateStackNavigationProp } from '@oxvo-mobile/navigation/types';

import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { useNavigation } from '@react-navigation/native';

const ProfileHomeScreen = () => {
  const { navigate } = useNavigation<PrivateStackNavigationProp>();

  const navigateToChangePasswordScreen = () => {
    navigate(PRIVATE_ROUTES.PROFILE.CHANGE_PASSWORD);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={navigateToChangePasswordScreen}>
        <Text style={{ color: 'white' }}>navigateToChangePasswordScreen</Text>
      </Button>
    </View>
  );
};

export default ProfileHomeScreen;
