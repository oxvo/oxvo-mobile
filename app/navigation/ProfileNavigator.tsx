import * as React from 'react';
import { Text, View } from 'react-native';

import Container from '@oxvo-mobile/components/Containers/Private/Container.styled';
import { ProfileNavigatorHeader } from '@oxvo-mobile/components/Header/Header';
import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';
import ChangePasswordScreen from '@oxvo-mobile/screens/PrivateScreens/Profile/ChangePassword/ChangePassword';
import ProfileHomeScreen from '@oxvo-mobile/screens/PrivateScreens/Profile/ProfileHome/ProfileHome';

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
        header: () => <ProfileNavigatorHeader route={PRIVATE_ROUTES.PROFILE.PROFILE_HOME} />,
      }}
      name={PRIVATE_ROUTES.PROFILE.PROFILE_HOME}
      component={ProfileHomeScreen}
    />
    <ProfileStack.Screen
      options={{
        header: () => <ProfileNavigatorHeader route={PRIVATE_ROUTES.PROFILE.CHANGE_PASSWORD} />,
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
      name={PRIVATE_ROUTES.PROFILE.ACCOUNT_SETTINGS}
      component={AccountSettings}
    />
  </ProfileStack.Navigator>
);

export default ProfileNavigator;
