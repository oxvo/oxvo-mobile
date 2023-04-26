import React, { memo } from 'react';
import { Image } from 'react-native';

import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import { Text } from 'react-native-ui-lib';
import styled from 'styled-components/native';

const HeaderCompanyLogoContainer = styled.View``;

const HeaderCompanyInfo = () => {
  const { companySettings } = useAuthStore((state) => state);

  return (
    <HeaderCompanyLogoContainer>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
        }}
        style={{ width: 80, height: 80 }}
        resizeMode="contain"
      />
    </HeaderCompanyLogoContainer>
  );
};

export default memo(HeaderCompanyInfo);
