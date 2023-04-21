import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { TaskInterface } from '@oxvo-mobile/screens/PrivateScreens/Calendar/types';

import { useNavigation } from '@react-navigation/native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type ChangeStatusFunction = (event: PanGestureHandlerGestureEvent) => void;
interface ListItemProps extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  task: TaskInterface;
  onDismiss?: (task: TaskInterface) => void;
  onPress?: () => void;
  changeTask?: () => void;
  navigation: any;
  changeStatus?: (index: number, status: number) => ChangeStatusFunction;
}

const LIST_ITEM_HEIGHT = 72;

const { width: SCREEN_WIDTH } = Dimensions.get('window');
//Eger Ekran genisliginin 1/10'u kadar kaydirirsa fonksiyonu tamamlat.
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.1;

const ListItem: React.FC<ListItemProps> = ({
  task,
  onDismiss,
  simultaneousHandlers,
  changeStatus,
  //   navigation,
}) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);
  const navigation = useNavigation();
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissedRight = translateX.value < TRANSLATE_X_THRESHOLD;
      const shouldBeDismissedLeft = -translateX.value < TRANSLATE_X_THRESHOLD;
      //saga dogru kaydırdığındaki fonksiyonlar
      if (shouldBeDismissedRight) {
        translateX.value = withTiming(0);
        runOnJS(changeStatus)(task.index, 0);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);

        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(task);
          }
        });
        //sola dogru kaydırdığındaki fonksiyonlar
      } else if (shouldBeDismissedLeft) {
        // translateX.value = withTiming(SCREEN_WIDTH);
        translateX.value = withTiming(0);
        runOnJS(changeStatus)(task.index, 1);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(task);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (task.index === 0) {
        const sequence1 = setTimeout(() => (translateX.value = withTiming(100)), 500);
        const sequence2 = setTimeout(() => (translateX.value = withTiming(0)), 1000);
        const sequence3 = setTimeout(() => (translateX.value = withTiming(-100)), 1500);
        const sequence4 = setTimeout(() => (translateX.value = withTiming(0)), 2000);
        return () => {
          clearTimeout(sequence1);
          clearTimeout(sequence2);
          clearTimeout(sequence3);
          clearTimeout(sequence4);
        };
      }
    });
    return unsubscribe;
  }, [navigation]);

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));
  const progress = useDerivedValue(() => {
    return withTiming(task.status === 2 ? 0 : task.status === 1 ? 0.5 : 1);
  });

  const tStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 0.5, 1],
      ['#FFE58A', '#B9DC8C', '#E35555']
    );

    return {
      backgroundColor,
    };
  });
  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0);
    return { opacity };
  });
  const lIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(translateX.value < -TRANSLATE_X_THRESHOLD ? 0 : 1);
    return { opacity };
  });

  //   const rTaskContainerStyle = useAnimatedStyle(() => {
  //     return {
  //       // height: itemHeight.value,
  //       // marginVertical: marginVertical.value,
  //       // opacity: opacity.value,
  //     };
  //   });

  return (
    //rTaskContainerStyle test aşaması
    <Animated.View style={[styles.taskContainer]}>
      <Animated.View style={[styles.left, lIconContainerStyle]}>
        <Ionicons name="checkmark-circle-sharp" size={24} color="white" style={styles.leftIcon} />
      </Animated.View>
      <Animated.View style={[styles.right, rIconContainerStyle]}>
        <MaterialIcons name="cancel" size={24} color="white" style={styles.rightIcon} />
      </Animated.View>

      <PanGestureHandler simultaneousHandlers={simultaneousHandlers} onGestureEvent={panGesture}>
        <Animated.View style={[styles.task, rStyle]}>
          <Animated.View style={[styles.status, tStyle]} />
          <Text style={styles.taskTitle}>{task.name}</Text>
          <Text style={styles.customer}>with {task.customer}</Text>
          <Text style={styles.customer}>{task.session}</Text>

          <Text style={{ position: 'absolute', right: 6, top: 9, fontSize: 12 }}>Today</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  customer: {
    fontSize: 12,
    color: '#343144',
  },
  rightIcon: {
    position: 'absolute',
    bottom: '30%',
    right: '3%',
  },
  leftIcon: {
    position: 'absolute',
    bottom: '30%',
    left: '5%',
  },
  status: {
    backgroundColor: '#FFE58A',
    width: 10,
    height: '100%',
    position: 'absolute',

    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  task: {
    width: '90%',
    height: LIST_ITEM_HEIGHT,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    // Shadow for iOS
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5,
  },
  taskTitle: {
    fontSize: 20,
  },
  right: {
    height: LIST_ITEM_HEIGHT,
    width: SCREEN_WIDTH * 0.8,
    position: 'absolute',
    right: '5%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#E35555',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  left: {
    height: LIST_ITEM_HEIGHT,
    width: SCREEN_WIDTH * 0.8,

    position: 'absolute',
    left: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B9DC8C',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
});

export default ListItem;
