import React, { useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Button, Text, View } from 'react-native-ui-lib';

import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import useHome from '@oxvo-mobile/domains/Home/queries/useHome';

import useCurrentUserRole from '@oxvo-mobile/domains/Me/hooks/useCurrentUserRole';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';

import {
  getFullNameByUserRole,
  getReplyByUserRole,
} from '@oxvo-mobile/screens/PrivateScreens/Home/Home.helpers';
import HomeSkeleton from '@oxvo-mobile/screens/PrivateScreens/Home/Home.skeleton';

import Container from '@oxvo-mobile/components/Containers/Private/Container.styled';
import CustomHandle from '@oxvo-mobile/components/CustomHandle';
import SessionCard from '@oxvo-mobile/components/SessionCard/SessionCard';
import SuperSessionCard from '@oxvo-mobile/components/SessionCard/SuperSessionCard';

import { PrivateStackNavigationProp } from '@oxvo-mobile/navigation/types';

import colors from '@oxvo-mobile/assets/colors.json';

import { UserRoles } from '@oxvo-mobile/constants/oxvo';
import { PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { useNavigation } from '@react-navigation/native';

import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

const HomeScreen = () => {
  const navigateSessionsHomeScreen = () => {
    navigate(PRIVATE_ROUTES.SESSIONS.SESSIONS_NAVIGATOR, {
      screen: PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME,
    });
  };

  const purgeCompanySettingsInStorage = () => {
    onLogout({ purgeCompanySettingsInStorage: true });
  };
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ['25%', '50%', '93%'], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(({ item }) => <SessionCard />, []);
  const renderCustomHandle = useCallback(
    (props) => <CustomHandle title="Last Counts" {...props} />,
    []
  );
  const { data: homeData, isLoading, isError, refetch, isFetching } = useHome();
  const { data: meData, isLoading: isLoadingMe } = useMe();
  const { t } = useTranslation();

  const { navigate } = useNavigation<PrivateStackNavigationProp>();

  const companySettings = useAuthStore((state) => state.companySettings);
  const isLogoutProcessing = useAuthStore((state) => state.isLogoutProcessing);
  const onLogout = useAuthStore((state) => state.onLogout);

  const currentUserRole = useCurrentUserRole();

  if (isLogoutProcessing) return <Text>Logging out...</Text>;
  // if (isLoadingMe) return <SkeletonView />;
  if (isLoading) {
    return <HomeSkeleton />;
  }

  if (isError) return <Text>Home Data has Error</Text>;
  const { width, height } = Dimensions.get('window');
  const paddingBottomValue = height * 0.24;
  console.log(homeData.sessions?.length);
  return (
    <View style={styles.container}>
      {/* <Button onPress={onLogout}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </Button> */}
      <View style={[styles.contentWrapper, { paddingBottom: paddingBottomValue }]}>
        <Text style={styles.title}>Today's Sessions</Text>
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={async () => {
                await refetch();
              }}
            />
          }
        >
          <View style={{ rowGap: 12 }}>
            {homeData.sessions?.map((session) => {
              const { userFullName, counterPartUserFullName } = getFullNameByUserRole(
                session,
                currentUserRole
              );
              const { userReply, counterPartUserReply } = getReplyByUserRole(
                session,
                currentUserRole
              );
              return (
                <SuperSessionCard
                  key={session.id}
                  userFullName={userFullName}
                  counterPartUserFullName={counterPartUserFullName}
                  startDate={session.startDate}
                  endDate={session.endDate}
                  companyServiceName={session.companyService.name}
                  userReply={userReply}
                  counterPartUserReply={counterPartUserReply}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      {/* 
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} /> */}

      <BottomSheet
        backgroundStyle={{ backgroundColor: colors.base.white }}
        handleComponent={renderCustomHandle}
        ref={sheetRef}
        index={homeData.sessions?.length || 0 < 5 ? 0 : 0}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <BottomSheetFlatList
          refreshing={isFetching}
          onRefresh={async () => {
            await refetch();
          }}
          data={data}
          keyExtractor={(i) => i}
          // renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
      {/* <Button onPress={onLogout}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </Button> */}
      {/* <Text h1>{t('screens.privateScreens.home.lastCounts')}</Text>
      <Text text>Today's Sessions</Text>
      <Text>
        Currents User Role:
        {currentUserRole}
      </Text>

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
      </Button> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {},
  scrollView: {},
  contentContainer: {
    rowGap: 12,

    backgroundColor: '#fff',
  },
  itemContainer: {
    backgroundColor: 'red',
    padding: 6,
    margin: 6,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 20,
    marginBottom: 12,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default HomeScreen;
