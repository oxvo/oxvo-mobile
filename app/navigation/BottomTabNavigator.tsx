import * as React from 'react';
import { View } from 'react-native';

import { BOTTOM_TAB_ROUTES } from '@oxvo-mobile/constants/routes';
import { BottomTabParamList } from '@oxvo-mobile/navigation/types';
import HomeScreen from '@oxvo-mobile/screens/PrivateScreens/Home/Home';
import OverviewScreen from '@oxvo-mobile/screens/PrivateScreens/Overview/Overview';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text } from 'react-native-ui-lib';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const Events = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Events Screen</Text>
  </View>
);

const Notifications = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Notifications Screen</Text>
  </View>
);

const BottomTabNavigator = (): React.ReactElement => (
  <BottomTab.Navigator initialRouteName={BOTTOM_TAB_ROUTES.HOME}>
    <BottomTab.Screen
      name={BOTTOM_TAB_ROUTES.HOME}
      component={HomeScreen}
      options={{
        tabBarLabel: () => <Text>Hrome</Text>,
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

export default BottomTabNavigator;
