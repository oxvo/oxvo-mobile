/* eslint-disable @typescript-eslint/ban-ts-comment */

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck @ts-ignore
// FIXME: @ts-ignore
import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SAFE_AREA_TOP_MARGIN } from '@oxvo-mobile/constants/ui';

import styled from 'styled-components/native';

const screenWidth = Dimensions.get('window').width;

const LeftElement = styled.View`
  align-items: flex-start;
  justify-content: center;
  width: ${screenWidth / 3}px;
`;

const MiddleElement = styled.View`
  flex: 1;
  align-items: center;
`;

const RightElement = styled.View`
  align-items: flex-end;
  justify-content: center;
  width: ${screenWidth / 3}px;
`;

const HeaderContainer = styled((props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      {...props}
      style={[
        props.style,
        { paddingTop: top + SAFE_AREA_TOP_MARGIN, height: 50 + top + SAFE_AREA_TOP_MARGIN },
      ]}
    />
  );
})`
  padding: 24px;

  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  z-index: 3;
  background-color: #fdfdfd;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
`;

export { HeaderContainer, RightElement, LeftElement, MiddleElement };
