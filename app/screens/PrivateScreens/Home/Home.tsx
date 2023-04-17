import React from 'react';
import useLogout from '@oxvo-mobile/domains/Auth/hooks/useLogout';
import useHome from '@oxvo-mobile/domains/Home/queries/useHome';
import getCurrentUserRole from '@oxvo-mobile/domains/Me/helpers/getCurrentUserRole';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';
import authStore from '@oxvo-mobile/store/authStore';
import { Button, Text, View } from 'react-native-ui-lib';

const HomeScreen = () => {
  const { data: homeData, isLoading, isError } = useHome();
  const { data: meData } = useMe();
  const logout = useLogout();

  const companySettings = authStore((state) => state.companySettings);

  const currentUserRole = getCurrentUserRole();

  if (isLoading) return <Text>Home Data is Loading...</Text>;
  if (isError) return <Text>Home Data has Error</Text>;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Current User Role: {currentUserRole}</Text>
      <Button onPress={logout}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </Button>
      <Text>Company Settings: {JSON.stringify(companySettings)}</Text>
      <Text>Me Data: {JSON.stringify(meData)}</Text>
      <Text>
        Home Data: Sessions Length: {homeData.sessions.length}, Packages Length:{' '}
        {homeData?.packages?.length || 0}
      </Text>
    </View>
  );
};

export default HomeScreen;
