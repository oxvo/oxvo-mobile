import * as React from 'react';

import AddService from '@oxvo-mobile/screens/PrivateScreens/AddService/AddService';
import CalendarScreen from '@oxvo-mobile/screens/PrivateScreens/Calendar/Calendar';
import HomeScreen from '@oxvo-mobile/screens/PrivateScreens/Home/Home';
import NotificationsScreen from '@oxvo-mobile/screens/PrivateScreens/Notifications/Notifications';
import OverviewScreen from '@oxvo-mobile/screens/PrivateScreens/Overview/Overview';

import Container from '@oxvo-mobile/components/Containers/Private/Container.styled';
import {
  BottomTabNavigatorHeader,
  ServiceNavigatorHeader,
} from '@oxvo-mobile/components/Header/Header';

import ProfileNavigator from '@oxvo-mobile/navigation/ProfileNavigator';
import SessionsNavigator from '@oxvo-mobile/navigation/SessionsNavigator';
import { BottomTabParamList, PrivateStackParamList } from '@oxvo-mobile/navigation/types';

import { BOTTOM_TAB_ROUTES, PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator<BottomTabParamList & PrivateStackParamList>();

const BottomTabNavigator = (): React.ReactElement => {
  return (
    <BottomTab.Navigator backBehavior="history" initialRouteName={BOTTOM_TAB_ROUTES.HOME}>
      <BottomTab.Screen
        name={PRIVATE_ROUTES.SESSIONS.SESSIONS_NAVIGATOR}
        component={SessionsNavigator}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <BottomTab.Screen
        options={{
          header: () => <ServiceNavigatorHeader />,
          tabBarButton: () => null,
        }}
        name={PRIVATE_ROUTES.ADD_SERVICE}
      >
        {() => (
          <Container>
            <AddService />
          </Container>
        )}
      </BottomTab.Screen>
      <BottomTab.Screen
        name={PRIVATE_ROUTES.PROFILE.PROFILE_NAVIGATOR}
        component={ProfileNavigator}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
      <BottomTab.Screen
        name={BOTTOM_TAB_ROUTES.HOME}
        options={{
          header: () => <BottomTabNavigatorHeader route={BOTTOM_TAB_ROUTES.HOME} />,
        }}
      >
        {() => (
          <Container>
            <HomeScreen />
          </Container>
        )}
      </BottomTab.Screen>
      <BottomTab.Screen
        name={BOTTOM_TAB_ROUTES.CALENDAR}
        options={{
          header: () => <BottomTabNavigatorHeader route={BOTTOM_TAB_ROUTES.CALENDAR} />,
        }}
      >
        {() => (
          <Container>
            <CalendarScreen />
          </Container>
        )}
      </BottomTab.Screen>
      <BottomTab.Screen
        name={BOTTOM_TAB_ROUTES.NOTIFICATIONS}
        options={{
          header: () => <BottomTabNavigatorHeader route={BOTTOM_TAB_ROUTES.NOTIFICATIONS} />,
        }}
      >
        {() => (
          <Container>
            <NotificationsScreen />
          </Container>
        )}
      </BottomTab.Screen>
      <BottomTab.Screen
        name={BOTTOM_TAB_ROUTES.OVERVIEW}
        options={{
          header: () => <BottomTabNavigatorHeader route={BOTTOM_TAB_ROUTES.OVERVIEW} />,
        }}
      >
        {() => (
          <Container>
            <OverviewScreen />
          </Container>
        )}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
