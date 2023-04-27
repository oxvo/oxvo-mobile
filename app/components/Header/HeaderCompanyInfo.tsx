import React, { memo } from 'react';
import { Image } from 'react-native';

import styled from 'styled-components/native';

const HeaderCompanyLogoContainer = styled.View``;

const HeaderCompanyInfo = () => {
  return (
    <HeaderCompanyLogoContainer>
      <Image
        source={{
          uri: 'https://static.wixstatic.com/media/bf9454_c222e363f86341e5a860514e2c811331.png/v1/fill/w_440,h_212,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bf9454_c222e363f86341e5a860514e2c811331.png',
        }}
        style={{ width: 80, height: 80 }}
        resizeMode="contain"
      />
    </HeaderCompanyLogoContainer>
  );
};

export default memo(HeaderCompanyInfo);
