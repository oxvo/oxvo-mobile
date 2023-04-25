import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

export const SCREEN_WIDTH = width;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitlesContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: 20,
  },
}))`
  flex-direction: row;
  margin-bottom: 8px;
  padding-horizontal: 0px;
`;

export const ViewContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding-horizontal: 0px;
  width: ${SCREEN_WIDTH}px;
`;

export const RouteButton = styled.TouchableOpacity`
  padding-vertical: 8px;
  margin-right: 24px;
  position: relative;
`;

export const RouteButtonBorder = styled.View`
  height: 3px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1000;
  border-radius: 100px;
`;
