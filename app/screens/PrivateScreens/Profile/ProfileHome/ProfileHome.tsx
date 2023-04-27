import React from 'react';
import { Button, Text, View } from 'react-native-ui-lib';

import { PrivateStackNavigationProp } from '@oxvo-mobile/navigation/types';

import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { useNavigation } from '@react-navigation/native';

const ProfileHomeScreen = () => {
  const { navigate } = useNavigation<PrivateStackNavigationProp>();

  const navigateChangePasswordScreen = () => {
    navigate(PRIVATE_ROUTES.PROFILE.CHANGE_PASSWORD);
  };

  const navigateAccountSettingsScreen = () => {
    navigate(PRIVATE_ROUTES.PROFILE.ACCOUNT_SETTINGS);
  };

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button onPress={navigateChangePasswordScreen}>
        <Text style={{ color: 'white' }}>Go to Change Password screen!</Text>
      </Button>
      <Button onPress={navigateAccountSettingsScreen}>
        <Text style={{ color: 'white' }}>Go to Account Settings screen!</Text>
      </Button>
    </View>
  );
};

export default ProfileHomeScreen;
