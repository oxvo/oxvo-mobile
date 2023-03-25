import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROOT_ROUTES } from '@oxvo-mobile/constants/routes';
import PrivateNavigator from '@oxvo-mobile/navigation/PrivateNavigator';
import PublicNavigator from '@oxvo-mobile/navigation/PublicNavigator';
import { RootStackParamList } from '@oxvo-mobile/navigation/types';


const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (): React.ReactElement => {
  const isLogged = false; //TODO
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
        {isLogged ? (
          <RootStack.Screen name={ROOT_ROUTES.PRIVATE_STACK} component={PrivateNavigator} />
        ) : (
          <RootStack.Screen name={ROOT_ROUTES.PUBLIC_STACK} component={PublicNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;