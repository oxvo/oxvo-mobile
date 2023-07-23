import * as React from 'react';

import CreateSessionScreen from '@oxvo-mobile/screens/PrivateScreens/Sessions/CreateSession/CreateSession';
import SessionDetailScreen from '@oxvo-mobile/screens/PrivateScreens/Sessions/SessionDetail/SessionDetail';
import SessionsHomeScreen from '@oxvo-mobile/screens/PrivateScreens/Sessions/SessionsHome/SessionsHome';

import Container from '@oxvo-mobile/components/Containers/Private/Container.styled';
import { SessionsNavigatorHeader } from '@oxvo-mobile/components/Header/Header';

import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SessionStack = createNativeStackNavigator();

const SessionsNavigator = () => (
  <SessionStack.Navigator initialRouteName={PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME}>
    <SessionStack.Screen
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
    </SessionStack.Screen>
    <SessionStack.Screen
      options={{
        header: () => <SessionsNavigatorHeader />,
      }}
      name={PRIVATE_ROUTES.SESSIONS.CREATE_SESSION}
      component={CreateSessionScreen}
    />
    <SessionStack.Screen
      options={{
        header: () => <SessionsNavigatorHeader />,
      }}
      name={PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL}
      component={SessionDetailScreen}
    />
  </SessionStack.Navigator>
);

export default SessionsNavigator;
