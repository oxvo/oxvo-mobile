import React, { CSSProperties } from 'react';

import colors from '@oxvo-mobile/assets/colors.json';

// FIXME
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient, Rect, Stop } from 'react-native-svg';

import { Container, Svg, Wrapper } from './Shimmer.styled';

const AnimatedWrapper = Animated.createAnimatedComponent(Wrapper);
const AnimatedContainer = Animated.createAnimatedComponent(Container);

interface ShimmerProps {
  containerStyles?: CSSProperties;
  height?: number;
  percentage?: number;
  noBorderRadius?: boolean;
  noMargin?: boolean;
  width?: number;
  wrapperStyles?: CSSProperties;
}

const Shimmer: React.FC<ShimmerProps> = ({
  containerStyles,
  height = 32,
  percentage = 100,
  noBorderRadius,
  noMargin,
  width = 0,
  wrapperStyles,
}) => {
  const widthNative = useSharedValue(0);

  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      height,
      width: width || `${(percentage * 100) / 100}%`,
    };
  }, [height, percentage, width]);

  const animatedWrapperStyles = useAnimatedStyle(() => {
    return {
      height,
      transform: [
        {
          translateX: widthNative.value
            ? withRepeat(
                withSequence(
                  withTiming(widthNative.value, { duration: 1000 }),
                  withTiming(-widthNative.value, { duration: 0 })
                ),
                -1,
                true
              )
            : 0,
        },
      ],
    };
  }, [height, widthNative]);

  const svgStyle = { height };

  return (
    <AnimatedContainer
      {...{ noBorderRadius, noMargin }}
      style={[animatedContainerStyles, containerStyles]}
      onLayout={({ nativeEvent }: any) => {
        widthNative.value = nativeEvent.layout.width;
      }}
      testID="shimmer"
    >
      <AnimatedWrapper testID="shimmerWrapper" style={[animatedWrapperStyles, wrapperStyles]}>
        <Svg style={svgStyle}>
          <LinearGradient
            id="grad"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="0%"
            start={{
              x: -1,
              y: 0.5,
            }}
            end={{
              x: 2,
              y: 0.5,
            }}
          >
            <Stop offset="0%" stopColor={colors.grays.gray03} />
            <Stop offset="50%" stopColor={colors.grays.gray04} />
            <Stop offset="100%" stopColor={colors.grays.gray03} />
          </LinearGradient>
          <Rect fill="url(#grad)" x="0" y="0" width="100%" height="100%" rx={2} ry={2} />
        </Svg>
      </AnimatedWrapper>
    </AnimatedContainer>
  );
};

export default Shimmer;
