import * as React from 'react';
import { Text, View } from 'react-native';

import ChangePasswordScreen from '@oxvo-mobile/screens/PrivateScreens/Profile/ChangePassword/ChangePassword';
import ProfileHomeScreen from '@oxvo-mobile/screens/PrivateScreens/Profile/ProfileHome/ProfileHome';

import Container from '@oxvo-mobile/components/Containers/Private/Container.styled';
import { ProfileNavigatorHeader } from '@oxvo-mobile/components/Header/Header';

import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AccountSettings = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>AccountSettings Screen</Text>
  </View>
);

const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => (
  <ProfileStack.Navigator initialRouteName={PRIVATE_ROUTES.PROFILE.PROFILE_HOME}>
    <ProfileStack.Screen
      options={{
        header: () => <ProfileNavigatorHeader />,
      }}
      name={PRIVATE_ROUTES.PROFILE.PROFILE_HOME}
    >
      {() => (
        <Container>
          <ProfileHomeScreen />
        </Container>
      )}
    </ProfileStack.Screen>
    <ProfileStack.Screen
      options={{
        header: () => <ProfileNavigatorHeader />,
      }}
      name={PRIVATE_ROUTES.PROFILE.CHANGE_PASSWORD}
    >
      {() => (
        <Container>
          <ChangePasswordScreen />
        </Container>
      )}
    </ProfileStack.Screen>
    <ProfileStack.Screen
      options={{
        header: () => <ProfileNavigatorHeader />,
      }}
      name={PRIVATE_ROUTES.PROFILE.ACCOUNT_SETTINGS}
    >
      {() => (
        <Container>
          <AccountSettings />
        </Container>
      )}
    </ProfileStack.Screen>
  </ProfileStack.Navigator>
);

export default ProfileNavigator;
