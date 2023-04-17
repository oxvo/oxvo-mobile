import * as React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityIndicator from '@oxvo-mobile/components/ActivityIndicator/ActivityIndicator';
import { PRIVATE_ROUTES, ROOT_ROUTES } from '@oxvo-mobile/constants/routes';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';
import BottomTabNavigator from '@oxvo-mobile/navigation/BottomTabNavigator';
import ProfileNavigator from '@oxvo-mobile/navigation/ProfileNavigator';
import { PrivateStackParamList } from '@oxvo-mobile/navigation/types';

const PrivateStack = createNativeStackNavigator<PrivateStackParamList>();

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

const PrivateNavigator = (): React.ReactElement => {
  const { isLoading, data } = useMe();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <PrivateStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <PrivateStack.Screen name={ROOT_ROUTES.TAB_STACK} component={BottomTabNavigator} />
      <PrivateStack.Screen name={PRIVATE_ROUTES.CREATE_EVENT} component={CreateEvent} />
      <PrivateStack.Screen name={PRIVATE_ROUTES.ADD_SERVICE} component={AddService} />
      <PrivateStack.Screen name={PRIVATE_ROUTES.PROFILE} component={ProfileNavigator} />
    </PrivateStack.Navigator>
  );
};

export default PrivateNavigator;