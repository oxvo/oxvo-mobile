import React from 'react';
import TabView from '@oxvo-mobile/components/TabView/TabView';
// import MyClientsScreen from './TabView/MyNetwork/MyMembers/MyMembers';
import MyStaffsScreen from './TabView/MyNetwork/MyStaffs/MyStaffs';
import MyPackagesScreen from './TabView/MyUpdates/MyPackages/MyPackages';


// import MyServices from './TabView/MyUpdatesMyServices/MyServices';

type UserType = 'clients' | 'staff';

const OverviewScreen = () => {
  const tabViewProps = {
    routes: [
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
    ],
    views: [<MyPackagesScreen />, <MyStaffsScreen />],
  };
  return <TabView {...tabViewProps}></TabView>;
};

export default OverviewScreen;