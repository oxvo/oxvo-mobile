import * as React from 'react';
import { Text, View } from 'react-native';

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
  <ProfileStack.Navigator initialRouteName={PRIVATE_ROUTES.PROFILE_HOME}>
    <ProfileStack.Screen name={PRIVATE_ROUTES.PROFILE_HOME} component={ProfileHomeScreen} />
    <ProfileStack.Screen name={PRIVATE_ROUTES.CHANGE_PASSWORD} component={ChangePasswordScreen} />
    <ProfileStack.Screen name={PRIVATE_ROUTES.ACCOUNT_SETTINGS} component={AccountSettings} />
  </ProfileStack.Navigator>
);

export default ProfileNavigator;
