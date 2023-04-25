import React, { memo } from 'react';

import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import { Text } from 'react-native-ui-lib';
import styled from 'styled-components/native';

const HeaderCompanyLogoContainer = styled.View``;

const HeaderCompanyInfo = () => {
  const { companySettings } = useAuthStore((state) => state);

  return (
    <HeaderCompanyLogoContainer>
      <Text h1>{companySettings?.name}</Text>
    </HeaderCompanyLogoContainer>
  );
};

export default memo(HeaderCompanyInfo);
