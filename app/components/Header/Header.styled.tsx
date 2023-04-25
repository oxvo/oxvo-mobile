/* eslint-disable @typescript-eslint/ban-ts-comment */

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck @ts-ignore
// FIXME: @ts-ignore
import React from 'react';
import { Image, Text, View } from 'react-native';

import { SAFE_AREA_TOP_MARGIN } from '@oxvo-mobile/constants/ui';

import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const Button = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.marginLeft ? 16 : 0)}px;
  margin-right: ${(props) => (props.marginRight ? 16 : 0)}px;
  min-height: 28px;
`;

const HeaderContainer = styled((props) => {
  const { top } = useSafeAreaInsets();
  return <View {...props} style={[props.style, { paddingTop: top + SAFE_AREA_TOP_MARGIN }]} />;
})`
  padding: 24px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: #fdfdfd;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
`;

const HeaderButtonGroup = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonText = styled((props) => <Text {...props} />)`
  padding-left: 8px;
  padding-right: 8px;
`;

const UnstyledIcon = ({ icon, iconProps }) => {
  switch (icon) {
    case 'left-arrow':
      return <AntDesign {...iconProps} size={24} color="black" />;
    default:
      return null;
  }
};

const HeaderIcon = styled(UnstyledIcon).attrs((props) => ({
  name: props.icon,
  iconProps: {
    fill: props.fill || props.theme.blacks.primeBlack80,
    height: '24px',
    width: '24px',
  },
}))``;

const HeaderImage = styled(Image)`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  margin-left: 10px;
`;

const HeaderTitle = styled(Text).attrs(({ theme }) => ({
  color: '#000',
  numberOfLines: 1,
  tag: 'h2',
}))`
  width: 85%;
`;
export {
  Button,
  ButtonText,
  HeaderIcon,
  HeaderButtonGroup,
  HeaderContainer,
  HeaderImage,
  HeaderTitle,
};
