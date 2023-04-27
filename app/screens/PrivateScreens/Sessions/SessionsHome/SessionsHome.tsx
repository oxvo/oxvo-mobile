import React from 'react';
import { Button, Text, View } from 'react-native-ui-lib';

import { PrivateStackNavigationProp } from '@oxvo-mobile/navigation/types';

import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { useNavigation } from '@react-navigation/native';

const SessionHome = () => {
  const { navigate } = useNavigation<PrivateStackNavigationProp>();

  const navigateCreateSessionScreen = () => {
    navigate(PRIVATE_ROUTES.SESSIONS.CREATE_SESSION);
  };

  const navigateSessionDetailScreen = () => {
    navigate(PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL);
  };

  return (
    <View>
      <Button onPress={navigateCreateSessionScreen}>
        <Text style={{ color: 'white' }}>Go to Create Session screen!</Text>
      </Button>
      <Button onPress={navigateSessionDetailScreen}>
        <Text style={{ color: 'white' }}>Go to Session Detail screen!</Text>
      </Button>
    </View>
  );
};

export default SessionHome;
