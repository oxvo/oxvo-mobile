import React from 'react';

import useLogout from '@oxvo-mobile/domains/Auth/hooks/useLogout';
import useHome from '@oxvo-mobile/domains/Home/queries/useHome';
import useCurrentUserRole from '@oxvo-mobile/domains/Me/hooks/useCurrentUserRole';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';
import authStore from '@oxvo-mobile/store/authStore';

import { Button, Text, View } from 'react-native-ui-lib';

const HomeScreen = () => {
  const { data: homeData, isLoading, isError } = useHome();
  const { data: meData } = useMe();
  const { onLogout } = useLogout();
  const { onLogout: purgeOnLogOut, isLogoutProcessing } = useLogout({
    purgeCompanySettingsInStorage: true,
  });

  const companySettings = authStore((state) => state.companySettings);

  const currentUserRole = useCurrentUserRole();

  if (isLogoutProcessing) return <Text>Logging out...</Text>;
  if (isLoading) return <Text>Home Data is Loading...</Text>;
  if (isError) return <Text>Home Data has Error</Text>;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Current User Role:
        {currentUserRole}
      </Text>
      <Button onPress={onLogout}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </Button>
      <Button onPress={purgeOnLogOut}>
        <Text style={{ color: 'white' }}>Logout and clear all data</Text>
      </Button>
      <Text>
        Company Settings:
        {JSON.stringify(companySettings)}
      </Text>
      <Text>
        Me Data:
        {JSON.stringify(meData)}
      </Text>
      <Text>
        Home Data: Sessions Length: {homeData?.sessions?.length}, Packages Length:{' '}
        {homeData?.packages?.length || 0}
      </Text>
    </View>
  );
};

export default HomeScreen;
