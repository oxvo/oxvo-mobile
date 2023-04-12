import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROOT_ROUTES } from '@oxvo-mobile/constants/routes';
import useAuthenticated from '@oxvo-mobile/domains/Auth/hooks/useAuthenticated';
import PrivateNavigator from '@oxvo-mobile/navigation/PrivateNavigator';
import PublicNavigator from '@oxvo-mobile/navigation/PublicNavigator';
import { RootStackParamList } from '@oxvo-mobile/navigation/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (): React.ReactElement => {
  const { isAuthenticated, isLoading } = useAuthenticated();

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
        {isAuthenticated ? (
          <RootStack.Screen name={ROOT_ROUTES.PRIVATE_STACK} component={PrivateNavigator} />
        ) : (
          <RootStack.Screen name={ROOT_ROUTES.PUBLIC_STACK} component={PublicNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;