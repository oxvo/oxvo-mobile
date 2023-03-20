import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BOTTOM_TAB_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES, ROOT_ROUTES } from '@oxvo-mobile/constants/routes';
import ProfileNavigator from '@oxvo-mobile/navigation/PrivateNavigators/ProfileNavigator';
import {
  BottomTabParamList,
  PrivateStackParamList,
  PublicStackParamList,
  RootStackParamList,
} from '@oxvo-mobile/navigation/types';

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
function AddService() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>AddService Screen</Text>
    </View>
  );
}
function CreateEvent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CreateEvent Screen</Text>
    </View>
  );
}
function Auth() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Auth Screen</Text>
    </View>
  );
}

const PublicStack = createNativeStackNavigator<PublicStackParamList>();
const PrivateStack = createNativeStackNavigator<PrivateStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={BOTTOM_TAB_ROUTES.HOME}
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => <Text>Home</Text>,
          headerShown: true,
        }}
      />
      <BottomTab.Screen name={BOTTOM_TAB_ROUTES.CALENDAR} component={Events} />
      <BottomTab.Screen name={BOTTOM_TAB_ROUTES.NOTIFICATIONS} component={Notifications} />
      <BottomTab.Screen name={BOTTOM_TAB_ROUTES.OVERVIEW} component={Overview} />
    </BottomTab.Navigator>
  );
}

function PublicNavigator() {
  return (
    <PublicStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <PublicStack.Screen name={PUBLIC_ROUTES.FORGOT_PASSWORD} component={Auth} />
      <PublicStack.Screen name={PUBLIC_ROUTES.INVITE_CODE} component={Auth} />
      <PublicStack.Screen name={PUBLIC_ROUTES.SIGN_IN} component={Auth} />
      <PublicStack.Screen name={PUBLIC_ROUTES.SIGN_UP} component={Auth} />
    </PublicStack.Navigator>
  );
}

function PrivateNavigator() {
  return (
    <PrivateStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <PrivateStack.Screen name={ROOT_ROUTES.TAB_STACK} component={BottomTabNavigator} />
      <PrivateStack.Screen name={PRIVATE_ROUTES.CREATE_EVENT} component={CreateEvent} />
      <PrivateStack.Screen name={PRIVATE_ROUTES.ADD_SERVICE} component={AddService} />
      <PrivateStack.Screen name={PRIVATE_ROUTES.PROFILE} component={ProfileNavigator} />
    </PrivateStack.Navigator>
  );
}

function RootNavigator() {
  const isLogged = true; //TODO
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
}

export default RootNavigator;