import * as React from 'react';
import { Text, View } from 'react-native';

import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import InviteCodeScreen from '@oxvo-mobile/screens/PublicScreens/Auth/InviteCode/InviteCode';
import SignInScreen from '@oxvo-mobile/screens/PublicScreens/Auth/SignIn/SignIn';
import SignUpScreen from '@oxvo-mobile/screens/PublicScreens/Auth/SignUp/SignUp';

import { PublicStackParamList } from '@oxvo-mobile/navigation/types';

import { PUBLIC_ROUTES } from '@oxvo-mobile/constants/routes';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useQueryClient } from '@tanstack/react-query';

const PublicStack = createNativeStackNavigator<PublicStackParamList>();

const Auth = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Auth Screen</Text>
  </View>
);

const PublicNavigator = (): React.ReactElement | null => {
  const hasInviteCode = useAuthStore((state) => !!state.companySettings?.code);
  const isLogoutProcessing = useAuthStore((state) => state.isLogoutProcessing);
  const queryClient = useQueryClient();

  const purgeReactQueryCache = async () => {
    await queryClient.cancelQueries();
    queryClient.removeQueries();
    await queryClient.invalidateQueries();
    await queryClient.resetQueries();
  };

  if (isLogoutProcessing) {
    purgeReactQueryCache();

    return null;
  }

  const initialRouteName = !hasInviteCode ? PUBLIC_ROUTES.SIGN_IN : PUBLIC_ROUTES.INVITE_CODE;

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
