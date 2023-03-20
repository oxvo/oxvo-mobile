import { CompositeNavigationProp, NavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  BOTTOM_TAB_ROUTES,
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
  ROOT_ROUTES,
} from '@oxvo-mobile/constants/routes';

export type PublicStackParamList = {
  [PUBLIC_ROUTES.FORGOT_PASSWORD]: undefined;
  [PUBLIC_ROUTES.INVITE_CODE]: undefined;
  [PUBLIC_ROUTES.SIGN_IN]: undefined;
  [PUBLIC_ROUTES.SIGN_UP]: undefined;
};

export type RootStackParamList = {
  [ROOT_ROUTES.PRIVATE_STACK]: undefined;
  [ROOT_ROUTES.PUBLIC_STACK]: undefined;
  [PRIVATE_ROUTES.CREATE_EVENT]: undefined;
  [PRIVATE_ROUTES.ADD_SERVICE]: undefined;
  [PRIVATE_ROUTES.PROFILE]: undefined;
};

export type BottomTabParamList = {
  [BOTTOM_TAB_ROUTES.HOME]: undefined;
  [BOTTOM_TAB_ROUTES.CALENDAR]: undefined;
  [BOTTOM_TAB_ROUTES.NOTIFICATIONS]: undefined;
  [BOTTOM_TAB_ROUTES.OVERVIEW]: undefined;
};

export type PrivateStackParamList = {
  [PRIVATE_ROUTES.HOME]: undefined;
  [PRIVATE_ROUTES.EVENTS]: undefined;
  [PRIVATE_ROUTES.EVENT_DETAIL]: { eventId: string };
  [PRIVATE_ROUTES.CREATE_EVENT]: undefined;
  [PRIVATE_ROUTES.PROFILE]: undefined;
  [PRIVATE_ROUTES.ACCOUNT_SETTINGS]: undefined;
  [PRIVATE_ROUTES.CHANGE_PASSWORD]: undefined;
  [PRIVATE_ROUTES.CALENDAR]: undefined;
  [PRIVATE_ROUTES.NOTIFICATIONS]: undefined;
  [PRIVATE_ROUTES.OVERVIEW]: undefined;
  [PRIVATE_ROUTES.ADD_SERVICE]: undefined;
  [ROOT_ROUTES.TAB_STACK]: undefined;
};

export type PublicStackNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<PublicStackParamList>,
  NavigationProp<RootStackParamList>
>;

export type BottomTabNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<BottomTabParamList>,
  PublicStackNavigationProp
>;

export type PrivateStackNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<PrivateStackParamList>,
  BottomTabNavigationProp
>;

export type PublicStackRouteProp<T extends keyof PublicStackParamList> = RouteProp<
  PublicStackParamList,
  T
>;

export type BottomTabRouteProp<T extends keyof BottomTabParamList> = RouteProp<
  BottomTabParamList,
  T
>;

export type PrivateStackRouteProp<T extends keyof PrivateStackParamList> = RouteProp<
  PrivateStackParamList,
  T
>;

export type PublicStackScreenProps<T extends keyof PublicStackParamList> = {
  navigation: NativeStackNavigationProp<PublicStackParamList, T>;
  route: NativeStackScreenProps<PublicStackParamList, T>;
};

export type BottomTabStackScreenProps<T extends keyof BottomTabParamList> = {
  navigation: NativeStackNavigationProp<BottomTabParamList, T>;
  route: NativeStackScreenProps<BottomTabParamList, T>;
};

export type PrivateStackScreenProps<T extends keyof PrivateStackParamList> = {
  navigation: NativeStackNavigationProp<PrivateStackParamList, T>;
  route: NativeStackScreenProps<PrivateStackParamList, T>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: NativeStackScreenProps<RootStackParamList, T>;
};
