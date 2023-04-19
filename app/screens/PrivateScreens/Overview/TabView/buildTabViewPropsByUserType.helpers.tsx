import React from 'react';

import { UserRoles } from '@oxvo-mobile/constants/global';

import MyClients from './MyNetwork/MyClients/MyClients';
import MyStaffs from './MyNetwork/MyStaffs/MyStaffs';
import MyPackages from './MyUpdates/MyPackages/MyPackages';
import MyServices from './MyUpdates/MyServices/MyServices';

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
  userType: UserRoles;
};

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

export default buildTabViewPropsByUserType;
