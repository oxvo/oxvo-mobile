import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BOTTOM_TAB_ROUTES } from '@oxvo-mobile/constants/routes';
import { BottomTabParamList } from '@oxvo-mobile/navigation/types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

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

const BottomTabNavigator = (): React.ReactElement => {
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
};

export default BottomTabNavigator;
