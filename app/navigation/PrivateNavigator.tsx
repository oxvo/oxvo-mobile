import * as React from 'react';

import { ROOT_ROUTES } from '@oxvo-mobile/constants/routes';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';
import BottomTabNavigator from '@oxvo-mobile/navigation/BottomTabNavigator';
import { PrivateStackParamList } from '@oxvo-mobile/navigation/types';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors, LoaderScreen, View } from 'react-native-ui-lib';

const PrivateStack = createNativeStackNavigator<PrivateStackParamList>();

const PrivateNavigator = (): React.ReactElement => {
  const { isLoading } = useMe();

  if (isLoading) {
    return (
      <View flex bg-orange70 center>
        <LoaderScreen message="Yükleniyor..." color={Colors.$backgroundDangerHeavy} />
      </View>
    );
  }

  return (
    <PrivateStack.Navigator screenOptions={{ headerShown: false }}>
      <PrivateStack.Screen name={ROOT_ROUTES.BOTTOM_TAB_STACK} component={BottomTabNavigator} />
    </PrivateStack.Navigator>
  );
};

export default PrivateNavigator;
