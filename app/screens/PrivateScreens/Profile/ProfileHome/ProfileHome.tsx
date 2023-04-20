import React from 'react';

import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';
import { PrivateStackNavigationProp } from '@oxvo-mobile/navigation/types';

import { useNavigation } from '@react-navigation/native';

import { Button, Text, View } from 'react-native-ui-lib';

const ProfileHomeScreen = () => {
  const { navigate } = useNavigation<PrivateStackNavigationProp>();

  const navigateToChangePasswordScreen = () => {
    navigate(PRIVATE_ROUTES.CHANGE_PASSWORD);
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
