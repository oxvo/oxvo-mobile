import * as React from 'react';
import { Text, View } from 'react-native';

import { PRIVATE_ROUTES, ROOT_ROUTES } from '@oxvo-mobile/constants/routes';
import BottomTabNavigator from '@oxvo-mobile/navigation/BottomTabNavigator';

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
    <ProfileStack.Screen name={ROOT_ROUTES.BOTTOM_TAB_STACK} component={BottomTabNavigator} />

    <ProfileStack.Screen
      name={PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME}
      component={SessionsHomeScreen}
    />
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
