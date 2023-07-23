import React, { memo } from 'react';
import { View } from 'react-native';

import useCurrentUserRole from '@oxvo-mobile/domains/Me/hooks/useCurrentUserRole';

import Shimmer from '@oxvo-mobile/components/Shimmer/Shimmer';

import { UserRoles } from '@oxvo-mobile/constants/oxvo';

const HomeSkeleton = () => {
  const currentUserRole = useCurrentUserRole();

  return (
    <View>
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
};

export default memo(HomeSkeleton);
