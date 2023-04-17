import React from 'react';
import TabView from '@oxvo-mobile/components/TabView/TabView';
import { USER_TYPES } from '@oxvo-mobile/constants/global';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';
import { MeResponse } from '@oxvo-mobile/domains/Me/services/fetchMe';
import MyClients from './TabView/MyNetwork/MyClients/MyClients';
import MyStaffs from './TabView/MyNetwork/MyStaffs/MyStaffs';
import MyPackages from './TabView/MyUpdates/MyPackages/MyPackages';
import MyServices from './TabView/MyUpdates/MyServices/MyServices';


type TabViewItem = {
  key: string;
  title: string;
  onPress?: () => void;
};

type TabViewProps = {
  routes: TabViewItem[];
  views: JSX.Element[];
};

type BuildTabViewPropsByUserTypeParams = {
  userType: USER_TYPES;
};

const OverviewScreen = () => {
  const { data } = useMe();

  const buildTabViewPropsByUserType = ({
    userType,
  }: BuildTabViewPropsByUserTypeParams): TabViewProps => {
    const CLIENT_ROUTES: TabViewItem[] = [
      {
        key: 'my_packages',
        title: 'My Packages',
        onPress: () => {
          console.log('My Packages');
        },
      },
      {
        key: 'my_staffs',
        title: 'My Staffs',
      },
    ];

    const CLIENT_VIEWS: JSX.Element[] = [<MyPackages />, <MyStaffs />];

    const STAFF_ROUTES: TabViewItem[] = [
      {
        key: 'my_services',
        title: 'My Services',
        onPress: () => {
          console.log('My Packages');
        },
      },
      {
        key: 'my_clients',
        title: 'My Clients',
      },
    ];

    const STAFF_VIEWS: JSX.Element[] = [<MyServices />, <MyClients />];

    switch (userType) {
      case USER_TYPES.CLIENT:
        return {
          routes: CLIENT_ROUTES,
          views: CLIENT_VIEWS,
        };
      case USER_TYPES.STAFF:
        return {
          routes: STAFF_ROUTES,
          views: STAFF_VIEWS,
        };
    }
  };

  const tabViewProps = buildTabViewPropsByUserType({
    userType: (data as MeResponse).role as USER_TYPES,
  });

  return <TabView {...tabViewProps} />;
};

export default OverviewScreen;