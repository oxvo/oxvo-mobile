import React from 'react';
import { Button, SkeletonView, Text, View } from 'react-native-ui-lib';

import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import useHome from '@oxvo-mobile/domains/Home/queries/useHome';

import useCurrentUserRole from '@oxvo-mobile/domains/Me/hooks/useCurrentUserRole';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';

import Container from '@oxvo-mobile/components/Containers/Private/Container.styled';
import Shimmer from '@oxvo-mobile/components/Shimmer/Shimmer';

import { PrivateStackNavigationProp } from '@oxvo-mobile/navigation/types';

import { UserRoles } from '@oxvo-mobile/constants/oxvo';
import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const { data: homeData, isLoading, isError } = useHome();
  const { data: meData, isLoading: isLoadingMe } = useMe();

  const { navigate } = useNavigation<PrivateStackNavigationProp>();

  const companySettings = useAuthStore((state) => state.companySettings);
  const isLogoutProcessing = useAuthStore((state) => state.isLogoutProcessing);
  const onLogout = useAuthStore((state) => state.onLogout);

  const currentUserRole = useCurrentUserRole();

  if (isLogoutProcessing) return <Text>Logging out...</Text>;
  // if (isLoadingMe) return <SkeletonView />;
  if (isLoading)
    return (
      <View style={{}}>
        <Shimmer height={20} noBorderRadius />
        <Shimmer height={16} width={279} noBorderRadius />
        <Shimmer height={16} width={279} noBorderRadius />
        <Shimmer height={16} width={279} noBorderRadius />
        {UserRoles.CLIENT === currentUserRole && (
          <View style={{ marginTop: 50 }}>
            <Shimmer height={20} noBorderRadius />
            <Shimmer height={16} width={279} noBorderRadius />
            <Shimmer height={16} width={279} noBorderRadius />
            <Shimmer height={16} width={279} noBorderRadius />
          </View>
        )}
      </View>
    );

  if (isError) return <Text>Home Data has Error</Text>;

  const navigateSessionsHomeScreen = () => {
    navigate(PRIVATE_ROUTES.SESSIONS.SESSIONS_NAVIGATOR, {
      screen: PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME,
    });
  };

  const purgeCompanySettingsInStorage = () => {
    onLogout({ purgeCompanySettingsInStorage: true });
  };

  return (
    <>
      <Text h1>Last Counts</Text>
      <Text text>Today's Sessions</Text>
      <Text>
        Currents User Role:
        {currentUserRole}
      </Text>
      <Button onPress={onLogout}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </Button>
      <Button onPress={purgeCompanySettingsInStorage}>
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
      <Button onPress={navigateSessionsHomeScreen}>
        <Text style={{ color: 'white' }}>Go to Sessions Home Screen</Text>
      </Button>
    </>
  );
};

export default HomeScreen;
