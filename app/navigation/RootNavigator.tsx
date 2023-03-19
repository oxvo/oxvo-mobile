import * as React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PRIVATE_ROUTES, ROOT_ROUTES } from '@oxvo-mobile/constants/routes';

function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function Events() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Events Screen</Text>
    </View>
  );
}
function Notifications() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}
function Overview() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Overview Screen</Text>
    </View>
  );
}

const PrivateStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

function PrivateNavigator() {
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen name={PRIVATE_ROUTES.HOME} component={Home} />
      <PrivateStack.Screen name={PRIVATE_ROUTES.EVENTS} component={Events} />
      <PrivateStack.Screen name={PRIVATE_ROUTES.NOTIFICATIONS} component={Notifications} />
      <PrivateStack.Screen name={PRIVATE_ROUTES.OVERVIEW} component={Overview} />
    </PrivateStack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
        <RootStack.Screen name={ROOT_ROUTES.PRIVATE_STACK} component={PrivateNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
