import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
function AccountSettings() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>AccountSettings Screen</Text>
    </View>
  );
}
function ChangePassword() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ChangePassword Screen</Text>
    </View>
  );
}

const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <NavigationContainer>
      <ProfileStack.Navigator initialRouteName={PRIVATE_ROUTES.PROFILE}>
        <ProfileStack.Screen name={PRIVATE_ROUTES.PROFILE} component={Profile} />
        <ProfileStack.Screen name={PRIVATE_ROUTES.CHANGE_PASSWORD} component={ChangePassword} />
        <ProfileStack.Screen name={PRIVATE_ROUTES.ACCOUNT_SETTINGS} component={AccountSettings} />
      </ProfileStack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileNavigator;
