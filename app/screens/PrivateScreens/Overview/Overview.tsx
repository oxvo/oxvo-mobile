import React from 'react';

import useMe from '@oxvo-mobile/domains/Me/queries/useMe';
import { MeResponse } from '@oxvo-mobile/domains/Me/services/fetchMe';

import TabView from '@oxvo-mobile/components/TabView/TabView';

import { UserRoles } from '@oxvo-mobile/constants/oxvo';

import useBuildTabViewPropsByUserType from './TabView/useBuildTabViewPropsByUserType';

const OverviewScreen = (): JSX.Element => {
  const { data } = useMe();

  const tabViewProps = useBuildTabViewPropsByUserType({
    userType: (data as MeResponse).role as UserRoles,
  });

  return <TabView {...tabViewProps} />;
};

export default OverviewScreen;
