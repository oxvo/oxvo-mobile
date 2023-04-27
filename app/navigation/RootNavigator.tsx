import * as React from 'react';

import useAuth from '@oxvo-mobile/domains/Auth/hooks/useAuth';

import PrivateNavigator from '@oxvo-mobile/navigation/PrivateNavigator';
import PublicNavigator from '@oxvo-mobile/navigation/PublicNavigator';
import { RootStackParamList } from '@oxvo-mobile/navigation/types';

import { ROOT_ROUTES } from '@oxvo-mobile/constants/routes';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (): React.ReactElement => {
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated ----------->', isAuthenticated);
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <RootStack.Screen
            options={{ animation: 'none' }}
            name={ROOT_ROUTES.PRIVATE_STACK}
            component={PrivateNavigator}
          />
        ) : (
          <RootStack.Screen
            options={{ animation: 'none' }}
            name={ROOT_ROUTES.PUBLIC_STACK}
            component={PublicNavigator}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
