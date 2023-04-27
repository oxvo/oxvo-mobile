import React from 'react';

import TabViewKey from '@oxvo-mobile/components/TabView/TabViewKey.types';

import { UserRoles } from '@oxvo-mobile/constants/oxvo';

import MyClients from './MyNetwork/MyClients/MyClients';
import MyStaffs from './MyNetwork/MyStaffs/MyStaffs';
import MyPackages from './MyUpdates/MyPackages/MyPackages';
import MyServices from './MyUpdates/MyServices/MyServices';

type TabViewItem = {
  key: TabViewKey;
  title: string;
  onPress?: () => void;
};

type TabViewProps = {
  routes: TabViewItem[];
  views: JSX.Element[];
};

type BuildTabViewPropsByUserTypeParams = {
  userType: UserRoles;
};

const useBuildTabViewPropsByUserType = ({
  userType,
}: BuildTabViewPropsByUserTypeParams): TabViewProps => {
  const CLIENT_ROUTES: TabViewItem[] = [
    {
      key: TabViewKey.MY_PACKAGES,
      title: 'My Packages',
      onPress: () => {
        console.log('My Packages');
      },
    },
    {
      key: TabViewKey.MY_STAFFS,
      title: 'My Staffs',
      onPress: () => {
        console.log('My Staffs');
      },
    },
  ];

  const CLIENT_VIEWS: JSX.Element[] = [<MyPackages />, <MyStaffs />];

  const STAFF_ROUTES: TabViewItem[] = [
    {
      key: TabViewKey.MY_SERVICES,
      title: 'My Services',
      onPress: () => {
        console.log('My Services');
      },
    },
    {
      key: TabViewKey.MY_CLIENTS,
      title: 'My Clients',
      onPress: () => {
        console.log('My Clients');
      },
    },
  ];

  const STAFF_VIEWS: JSX.Element[] = [<MyServices />, <MyClients />];

  switch (userType) {
    case UserRoles.CLIENT:
      return {
        routes: CLIENT_ROUTES,
        views: CLIENT_VIEWS,
      };
    case UserRoles.STAFF:
      return {
        routes: STAFF_ROUTES,
        views: STAFF_VIEWS,
      };
    default:
      return {
        routes: STAFF_ROUTES,
        views: STAFF_VIEWS,
      };
  }
};

export default useBuildTabViewPropsByUserType;
