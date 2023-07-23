import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import { toRad } from 'react-native-redash';
import { Text } from 'react-native-ui-lib';

import colors from '@oxvo-mobile/assets/colors.json';

import { BottomSheetHandleProps } from '@gorhom/bottom-sheet';

// @ts-ignore
export const transformOrigin = ({ x, y }, ...transformations) => {
  'worklet';

  return [
    { translateX: x },
    { translateY: y },
    ...transformations,
    { translateX: x * -1 },
    { translateY: y * -1 },
  ];
};

interface HandleProps extends BottomSheetHandleProps {
  style?: StyleProp<ViewStyle>;
}

const Handle: React.FC<HandleProps> = ({ style, title, animatedIndex }) => {
  // #region animations
  const indicatorTransformOriginY = useDerivedValue(() =>
    interpolate(animatedIndex.value, [0, 1, 2], [-1, 0, 1], Extrapolate.CLAMP)
  );
  // #endregion

  // #region styles
  const containerStyle = useMemo(() => [styles.header, style], [style]);
  const containerAnimatedStyle = useAnimatedStyle(() => {
    const borderTopRadius = interpolate(animatedIndex.value, [1, 2], [20, 0], Extrapolate.CLAMP);
    return {
      borderTopLeftRadius: borderTopRadius,
      borderTopRightRadius: borderTopRadius,
    };
  });
  const leftIndicatorStyle = useMemo(
    () => ({
      ...styles.indicator,
      ...styles.leftIndicator,
    }),
    []
  );
  const leftIndicatorAnimatedStyle = useAnimatedStyle(() => {
    const leftIndicatorRotate = interpolate(
      animatedIndex.value,
      [0, 1, 2],
      [toRad(-30), 0, toRad(30)],
      Extrapolate.CLAMP
    );
    return {
      transform: transformOrigin(
        { x: 0, y: indicatorTransformOriginY.value },
        {
          rotate: `${leftIndicatorRotate}rad`,
        },
        {
          translateX: -5,
        }
      ),
    };
  });
  const rightIndicatorStyle = useMemo(
    () => ({
      ...styles.indicator,
      ...styles.rightIndicator,
    }),
    []
  );
  const rightIndicatorAnimatedStyle = useAnimatedStyle(() => {
    const rightIndicatorRotate = interpolate(
      animatedIndex.value,
      [0, 1, 2],
      [toRad(30), 0, toRad(-30)],
      Extrapolate.CLAMP
    );
    return {
      transform: transformOrigin(
        { x: 0, y: indicatorTransformOriginY.value },
        {
          rotate: `${rightIndicatorRotate}rad`,
        },
        {
          translateX: 5,
        }
      ),
    };
  });
  // #endregion

  // render
  return (
    <Animated.View style={[containerStyle, containerAnimatedStyle]} renderToHardwareTextureAndroid>
      <Animated.View style={[leftIndicatorStyle, leftIndicatorAnimatedStyle]} />
      <Animated.View style={[rightIndicatorStyle, rightIndicatorAnimatedStyle]} />
      <Text text60BO marginT-24 style={styles.title}>
        {title}
      </Text>
    </Animated.View>
  );
};

export default Handle;

const styles = StyleSheet.create({
  header: {
    alignContent: 'center',
    alignItems: 'center',

    backgroundColor: 'blue',

    paddingVertical: 12,
    // borderBottomWidth: 1,
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderTopColor: '#f3f3f3',
    // borderBottomColor: '#fff',
    // borderLeftColor: '#f3f3f3',
    // borderRightColor: '#f3f3f3',
  },
  title: {
    // alignSelf: 'flex-start',
    // // paddingLeft: 4,
    // marginTop: 26,
    // fontSize: 20,
    // lineHeight: 20,
    // textAlign: 'center',
    // fontWeight: 'bold',
  },
  indicator: {
    position: 'absolute',
    width: 10,
    top: 20,
    height: 4,
    backgroundColor: 'gray',
  },
  leftIndicator: {
    borderTopStartRadius: 2,
    borderBottomStartRadius: 2,
  },
  rightIndicator: {
    borderTopEndRadius: 2,
    borderBottomEndRadius: 2,
  },
});
