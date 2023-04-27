import * as React from 'react';
import { Text, View } from 'react-native';

import Container from '@oxvo-mobile/components/Containers/Private/Container.styled';
import { SessionsNavigatorHeader } from '@oxvo-mobile/components/Header/Header';

import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CreateSessionScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Create Session Screen</Text>
  </View>
);

const SessionDetailScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Session Detail Screen</Text>
  </View>
);

const SessionsHomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>SessionsHomeScreen</Text>
  </View>
);

const ProfileStack = createNativeStackNavigator();

const SessionsNavigator = () => (
  <ProfileStack.Navigator initialRouteName={PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME}>
    <ProfileStack.Screen
      options={{
        header: () => <SessionsNavigatorHeader route={PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME} />,
      }}
      name={PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME}
    >
      {() => (
        <Container>
          <SessionsHomeScreen />
        </Container>
      )}
    </ProfileStack.Screen>
    <ProfileStack.Screen
      name={PRIVATE_ROUTES.SESSIONS.CREATE_SESSION}
      component={CreateSessionScreen}
    />
    <ProfileStack.Screen
      name={PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL}
      component={SessionDetailScreen}
    />
  </ProfileStack.Navigator>
);

export default SessionsNavigator;
