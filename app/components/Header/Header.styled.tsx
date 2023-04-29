import React from 'react';
import { Dimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '@oxvo-mobile/assets/colors.json';

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
  background-color: ${colors.base.white};
  border-bottom-width: 1px;
  border-bottom-color: ${colors.base.lightGray};
`;

export { HeaderContainer, RightElement, LeftElement, MiddleElement };
