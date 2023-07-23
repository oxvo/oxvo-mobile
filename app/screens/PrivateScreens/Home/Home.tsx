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
import SuperSessionCard from '@oxvo-mobile/components/SessionCard/SuperSessionCard';

import { PrivateStackNavigationProp } from '@oxvo-mobile/navigation/types';

import colors from '@oxvo-mobile/assets/colors.json';

import { UserRoles } from '@oxvo-mobile/constants/oxvo';
import { BOTTOM_TAB_ROUTES, PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';
import tailwind from 'twrnc';

const HomeScreen = ({ navigation }) => {
  const navigateSessionsHomeScreen = () => {
    navigate(PRIVATE_ROUTES.SESSIONS.SESSIONS_NAVIGATOR, {
      screen: PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME,
    });
  };

  const purgeCompanySettingsInStorage = () => {
    onLogout({ purgeCompanySettingsInStorage: true });
  };

  const { data: homeData, isLoading, isError, refetch, isFetching } = useHome();
  const { data: meData, isLoading: isLoadingMe } = useMe();
  const { t } = useTranslation();
  const sheetRef = React.useRef<BottomSheet>(null);
  const handleOnCloseSheet = React.useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const renderBackdrop = React.useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        pressBehavior="none"
        {...props}
        opacity={0.75}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );
  // variables
  const snapPoints = React.useMemo(() => ['40%'], []);
  const { navigate, reset, getRootState } = useNavigation<PrivateStackNavigationProp>();

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

  console.log(homeData.sessions?.length);
  const Container = styled.View`
    margin: 8px 0px;
    row-gap: 8px;
  `;
  const currentNavigationState = navigation.getState();
  const previousRoute = currentNavigationState.routes[currentNavigationState.index - 1];

  const handleNavigateToSessionDetail = (session: any) => {
    navigate(PRIVATE_ROUTES.SESSIONS.SESSIONS_NAVIGATOR, {
      screen: PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL,
      params: { session, from: BOTTOM_TAB_ROUTES.HOME },
    });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={async () => {
            await refetch();
          }}
        />
      }
    >
      <Container>
        <Button onPress={onLogout}>
          <Text style={{ color: 'white' }}>Logout and clear all data</Text>
        </Button>
        {homeData.sessions?.map((session) => {
          const { userFullName, counterPartUserFullName } = getFullNameByUserRole(
            session,
            currentUserRole
          );
          const { userReply, counterPartUserReply } = getReplyByUserRole(session, currentUserRole);
          return (
            <SuperSessionCard
              onPress={() => handleNavigateToSessionDetail(session)}
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
      </Container>
      {/* <View style={{}}> */}
      <BottomSheet
        index={0}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        ref={sheetRef}
        snapPoints={snapPoints}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        backgroundStyle={tailwind.style('bg-white')}
        onClose={handleOnCloseSheet}
      >
        <BottomSheetView style={tailwind.style('flex-1 bg-white px-5')}>
          <View style={tailwind.style('flex flex-row justify-between items-center py-4')}>
            <Text>sdsds</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
      {/* </View> */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  locationTextInput: {
    height: 18,
    fontSize: 16,
    marginLeft: 14,
  },
  hourSegmentStyle: { opacity: 0.06 },
  handleStyle: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'white',
  },
  handleIndicatorStyle: {
    width: 36,
    height: 4,
  },
  bottomSheetText: {
    paddingLeft: 14,
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  totalTimeContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4.5,
    borderRadius: 16,
    backgroundColor: '#F3F3F3',
    marginLeft: 12,
  },
  totalTimeText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#383838',
  },
  bottomSheetTotalTimeText: {
    opacity: 0.5,
    fontSize: 13,
    fontWeight: '600',
  },
  eventText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
