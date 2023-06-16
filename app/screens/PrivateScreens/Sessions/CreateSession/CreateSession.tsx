import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

import { PrivateStackNavigationProp } from '@oxvo-mobile/navigation/types';

import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { useNavigation } from '@react-navigation/native';

const CreateSession = () => {
  const { navigate } = useNavigation<PrivateStackNavigationProp>();

  const navigateHomecreen = () => {
    navigate(PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME);
  };

  const navigateSessionDetailScreen = () => {
    navigate(PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL);
  };

  return (
    <View>
      <Text> CREATE SESSION!</Text>
      <Button onPress={navigateHomecreen}>
        <Text style={{ color: 'white' }}>Go to Home screen!</Text>
      </Button>
      <Button onPress={navigateSessionDetailScreen}>
        <Text style={{ color: 'white' }}>Go to Session Detail screen!</Text>
      </Button>
    </View>
  );
};

export default CreateSession;
