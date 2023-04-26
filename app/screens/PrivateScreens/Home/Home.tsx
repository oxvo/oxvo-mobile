import React from 'react';

import Container from '@oxvo-mobile/components/Containers/Private/Container.styled';
import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';
import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';
import useHome from '@oxvo-mobile/domains/Home/queries/useHome';
import useCurrentUserRole from '@oxvo-mobile/domains/Me/hooks/useCurrentUserRole';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';
import { PrivateStackNavigationProp } from '@oxvo-mobile/navigation/types';

import { useNavigation } from '@react-navigation/native';

import { Button, SkeletonView, Text, View } from 'react-native-ui-lib';

const HomeScreen = () => {
  const { data: homeData, isLoading, isError } = useHome();
  const { data: meData, isLoading: isLoadingMe } = useMe();

  const { navigate } = useNavigation<PrivateStackNavigationProp>();

  const { companySettings, isLogoutProcessing, onLogout } = useAuthStore((state) => state);

  const currentUserRole = useCurrentUserRole();

  if (isLogoutProcessing) return <Text>Logging out...</Text>;
  if (isLoadingMe) return <SkeletonView />;
  if (isLoading)
    return (
      <View style={{ rowGap: 48 }}>
        {/* <SkeletonView showContent={isLoading} template={SkeletonView.templates.TEXT_CONTENT} />
        <SkeletonView showContent={isLoading} template={SkeletonView.templates.TEXT_CONTENT} /> */}
      </View>
    );
  if (isError) return <Text>Home Data has Error</Text>;

  const navigateToProfileScreen = () => {
    navigate(PRIVATE_ROUTES.PROFILE.PROFILE_NAVIGATOR, {
      screen: PRIVATE_ROUTES.PROFILE.PROFILE_HOME,
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
      <Button onPress={navigateToProfileScreen}>
        <Text style={{ color: 'white' }}>navigateToProfileScreen</Text>
      </Button>
    </>
  );
};

export default HomeScreen;
