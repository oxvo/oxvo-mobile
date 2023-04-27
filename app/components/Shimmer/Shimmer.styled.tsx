import colors from '@oxvo-mobile/assets/colors.json';

import { Svg as SvgComp } from 'react-native-svg';
import styled from 'styled-components/native';

// FIXME
const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: ${(props) => (props.noMargin ? 0 : 8)}px;
  border-radius: ${(props) => (props.noBorderRadius ? 0 : 8)}px;
  background-color: ${colors.grays.gray03};
  overflow: hidden;
  width: 100%;
`;

const Svg = styled(SvgComp)`
  width: 100%;
  overflow: hidden;
`;

const Wrapper = styled.View`
  width: 100%;
`;

export { Container, Svg, Wrapper };
