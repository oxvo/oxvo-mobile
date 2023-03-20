import * as React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PUBLIC_ROUTES } from '@oxvo-mobile/constants/routes';
import { PublicStackParamList } from '@oxvo-mobile/navigation/types';

const PublicStack = createNativeStackNavigator<PublicStackParamList>();

function Auth() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Auth Screen</Text>
    </View>
  );
}

const PublicNavigator = (): React.ReactElement => {
  return (
    <PublicStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <PublicStack.Screen name={PUBLIC_ROUTES.FORGOT_PASSWORD} component={Auth} />
      <PublicStack.Screen name={PUBLIC_ROUTES.INVITE_CODE} component={Auth} />
      <PublicStack.Screen name={PUBLIC_ROUTES.SIGN_IN} component={Auth} />
      <PublicStack.Screen name={PUBLIC_ROUTES.SIGN_UP} component={Auth} />
    </PublicStack.Navigator>
  );
};

export default PublicNavigator;
