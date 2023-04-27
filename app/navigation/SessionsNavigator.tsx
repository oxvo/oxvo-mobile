import * as React from 'react';

import CreateSessionScreen from '@oxvo-mobile/screens/PrivateScreens/Sessions/CreateSession/CreateSession';
import SessionDetailScreen from '@oxvo-mobile/screens/PrivateScreens/Sessions/SessionDetail/SessionDetail';
import SessionsHomeScreen from '@oxvo-mobile/screens/PrivateScreens/Sessions/SessionsHome/SessionsHome';

import Container from '@oxvo-mobile/components/Containers/Private/Container.styled';
import { SessionsNavigatorHeader } from '@oxvo-mobile/components/Header/Header';

import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ProfileStack = createNativeStackNavigator();

const SessionsNavigator = () => (
  <ProfileStack.Navigator initialRouteName={PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME}>
    <ProfileStack.Screen
      options={{
        header: () => <SessionsNavigatorHeader />,
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
      options={{
        header: () => <SessionsNavigatorHeader />,
      }}
      name={PRIVATE_ROUTES.SESSIONS.CREATE_SESSION}
    >
      {() => (
        <Container>
          <CreateSessionScreen />
        </Container>
      )}
    </ProfileStack.Screen>
    <ProfileStack.Screen
      options={{
        header: () => <SessionsNavigatorHeader />,
      }}
      name={PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL}
    >
      {() => (
        <Container>
          <SessionDetailScreen />
        </Container>
      )}
    </ProfileStack.Screen>
  </ProfileStack.Navigator>
);

export default SessionsNavigator;
