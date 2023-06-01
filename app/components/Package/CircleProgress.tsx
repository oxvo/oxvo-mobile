import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { CENTER, CIRCUMFERENCE, RADIUS, SIZE, STROKE_WIDTH } from './CircleProgress.constant';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircleProgress = ({ current, max, children }: any) => {
  const animatedValue = useSharedValue(0);
  useEffect(() => {
    animatedValue.value = withDelay(
      500,
      withTiming(CIRCUMFERENCE - (CIRCUMFERENCE * current) / max, {
        duration: 500,
      })
    );
  }, []);
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: animatedValue.value,
    };
  });

  return (
    <View style={{ width: SIZE, height: SIZE }}>
      <Svg width={SIZE} height={SIZE} style={{ transform: [{ rotateZ: '-90deg' }] }}>
        <Circle stroke="#E6E7E8" cx={CENTER} cy={CENTER} r={RADIUS} strokeWidth={STROKE_WIDTH} />
        <AnimatedCircle
          stroke="#645CBB"
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={CIRCUMFERENCE}
          animatedProps={animatedProps}
        />
      </Svg>

      <View style={styles.text}>{children}</View>
    </View>
  );
};

export default CircleProgress;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
  },
  text: {
    top: 8,
    left: 8,
    right: 8,
    bottom: 8,
    position: 'absolute',
    borderRadius: RADIUS - STROKE_WIDTH * 1,
    padding: 1,
  },
});
