import React from 'react';

import TabView from '@oxvo-mobile/components/TabView/TabView';
import { UserRoles } from '@oxvo-mobile/constants/global';
import useMe from '@oxvo-mobile/domains/Me/queries/useMe';
import { MeResponse } from '@oxvo-mobile/domains/Me/services/fetchMe';

import buildTabViewPropsByUserType from './TabView/buildTabViewPropsByUserType.helpers';

const OverviewScreen = (): JSX.Element => {
  const { data } = useMe();

  const tabViewProps = buildTabViewPropsByUserType({
    userType: (data as MeResponse).role as UserRoles,
  });

  return <TabView {...tabViewProps} />;
};

export default OverviewScreen;
