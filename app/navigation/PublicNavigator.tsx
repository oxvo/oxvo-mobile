import * as React from 'react';
import { Text, View } from 'react-native';

import { PUBLIC_ROUTES } from '@oxvo-mobile/constants/routes';
import useLogout from '@oxvo-mobile/domains/Auth/hooks/useLogout';
import { PublicStackParamList } from '@oxvo-mobile/navigation/types';
import InviteCodeScreen from '@oxvo-mobile/screens/PublicScreens/Auth/InviteCode/InviteCode';
import SignInScreen from '@oxvo-mobile/screens/PublicScreens/Auth/SignIn/SignIn';
import SignUpScreen from '@oxvo-mobile/screens/PublicScreens/Auth/SignUp/SignUp';
import authStore from '@oxvo-mobile/store/authStore';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PublicStack = createNativeStackNavigator<PublicStackParamList>();

const Auth = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Auth Screen</Text>
  </View>
);

const PublicNavigator = (): React.ReactElement | null => {
  const hasInviteCode = authStore((state) => !!state.companySettings?.code);
  const { isLogoutProcessing } = useLogout();

  if (isLogoutProcessing) {
    return null;
  }

  const initialRouteName = hasInviteCode ? PUBLIC_ROUTES.SIGN_IN : PUBLIC_ROUTES.INVITE_CODE;

  return (
    <PublicStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <PublicStack.Screen name={PUBLIC_ROUTES.FORGOT_PASSWORD} component={Auth} />
      <PublicStack.Screen name={PUBLIC_ROUTES.INVITE_CODE} component={InviteCodeScreen} />
      <PublicStack.Screen name={PUBLIC_ROUTES.SIGN_IN} component={SignInScreen} />
      <PublicStack.Screen name={PUBLIC_ROUTES.SIGN_UP} component={SignUpScreen} />
    </PublicStack.Navigator>
  );
};

export default PublicNavigator;
