import React from 'react';

import useLogout from '@oxvo-mobile/domains/Auth/hooks/useLogout';
import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';
import useHome from '@oxvo-mobile/domains/Home/queries/useHome';
import useCurrentUserRole from '@oxvo-mobile/domains/Me/hooks/useCurrentUserRole';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';

import { Button, Text, View } from 'react-native-ui-lib';

const HomeScreen = () => {
  const { data: homeData, isLoading, isError } = useHome();
  const { data: meData, isLoading: isLoadingMe } = useMe();
  const { onLogout } = useLogout();
  const { onLogout: purgeOnLogOut } = useLogout({
    purgeCompanySettingsInStorage: true,
  });

  const { companySettings, isLogoutProcessing } = useAuthStore((state) => state);

  const currentUserRole = useCurrentUserRole();

  if (isLogoutProcessing) return <Text>Logging out...</Text>;
  if (isLoadingMe) return <Text>Me Data is Loading...</Text>;
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
