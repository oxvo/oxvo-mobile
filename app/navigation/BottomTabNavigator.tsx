import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BOTTOM_TAB_ROUTES } from '@oxvo-mobile/constants/routes';
import useLogout from '@oxvo-mobile/domains/Auth/hooks/useLogout';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';
import { BottomTabParamList } from '@oxvo-mobile/navigation/types';
import OverviewScreen from '@oxvo-mobile/screens/PrivateScreens/Overview/Overview';
import authStore from '@oxvo-mobile/store/authStore';
import { Button, Text } from 'react-native-ui-lib';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function Home() {
  const companySettings = authStore((state) => state.companySettings);
  const { data } = useMe();
  const logout = useLogout();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={logout}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </Button>
      <Text>Home Screen, Company Settings: {JSON.stringify(companySettings)}</Text>
      <Text>-</Text>

      <Text>Home Screen, Me Data: {JSON.stringify(data)}</Text>
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
    <BottomTab.Navigator initialRouteName={BOTTOM_TAB_ROUTES.OVERVIEW}>
      <BottomTab.Screen
        name={BOTTOM_TAB_ROUTES.HOME}
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => <Text>Hrome</Text>,
          headerShown: true,
          tabBarBadge: '',
          tabBarBadgeStyle: {
            minWidth: 14,
            maxHeight: 14,
            borderRadius: 7,
            fontSize: 10,
            lineHeight: 13,
            alignSelf: undefined,
          },
        }}
      />
      <BottomTab.Screen name={BOTTOM_TAB_ROUTES.CALENDAR} component={Events} />
      <BottomTab.Screen name={BOTTOM_TAB_ROUTES.NOTIFICATIONS} component={Notifications} />
      <BottomTab.Screen name={BOTTOM_TAB_ROUTES.OVERVIEW} component={OverviewScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;