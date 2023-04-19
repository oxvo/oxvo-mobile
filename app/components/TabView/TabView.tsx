import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';

import Animated, {
  scrollTo,
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { Text } from 'react-native-ui-lib';

import {
  Container,
  RouteButton,
  RouteButtonBorder,
  SCREEN_WIDTH,
  TitlesContainer,
  ViewContainer,
} from './TabView.styled';

const TAB_WIDTH = 100;
const TABS_SCROLL_EVENT_THROTTLE = 200;

type Route = {
  key: string;
  title: string;
  hide?: boolean;
  onPress?: () => void;
};

type Props<T extends Route> = {
  routes: T[];
  views: React.ReactNode[];
  initialRoute?: T;
};

const TabView = <T extends Route>({ routes = [], views = [], initialRoute }: Props<T>) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const visibleRoutes = routes.filter((r) => !r.hide);
  const visibleViews = views.filter((_, index) => !routes[index].hide);

  const currentRoute = initialRoute || visibleRoutes?.[0] || null;
  const currentIndex = visibleRoutes.map((r) => r.key).indexOf(currentRoute?.key);
  const [activeRoute, setActiveRoute] = useState(currentRoute);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scroll = useSharedValue(0);

  useDerivedValue(() => {
    scrollTo(scrollRef, scroll.value, 0, true);
  });

  const activeRouteIndex = useSharedValue(currentIndex);

  const handleSetTab = useCallback(
    (route: T) => {
      if (route) {
        const newIndex = visibleRoutes.map((r) => r.key).indexOf(route.key);
        activeRouteIndex.value = newIndex;
        setActiveRoute(route);
        scroll.value = SCREEN_WIDTH * newIndex;
      }
    },
    [activeRouteIndex, visibleRoutes, scroll]
  );

  useEffect(() => {
    if (initialRoute && initialRoute.key !== activeRoute.key) {
      handleSetTab(initialRoute);
    }
  }, [initialRoute, handleSetTab, activeRoute]);

  const handlePressTab = (route: T) => {
    handleSetTab(route);
  };

  const scrollToPosition = useCallback(() => {
    const POSITION_X = TAB_WIDTH * activeRouteIndex.value;
    const SCROLL_POSITION = POSITION_X > SCREEN_WIDTH / 2 ? POSITION_X : 0;

    scrollViewRef.current?.scrollTo({
      animated: true,
      x: SCROLL_POSITION,
      y: 0,
    });
  }, [activeRouteIndex.value]);

  useEffect(() => {
    scrollToPosition();
  }, [activeRouteIndex.value, scrollToPosition]);

  return visibleRoutes.length ? (
    <Container testID="tabView">
      <TitlesContainer
        ref={scrollViewRef}
        bounces={false}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={TABS_SCROLL_EVENT_THROTTLE}
      >
        {visibleRoutes.map((route) => {
          const isActiveRoute = activeRoute?.key === route.key;
          const color = isActiveRoute ? 'red' : 'black';
          return (
            <RouteButton
              key={route.key}
              onPress={() => {
                handlePressTab(route);
                route?.onPress?.();
              }}
            >
              <Text color={color}>{route.title}</Text>
              {isActiveRoute ? <RouteButtonBorder style={{ backgroundColor: color }} /> : null}
            </RouteButton>
          );
        })}
      </TitlesContainer>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEnabled={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        testID="tabview-views-container"
      >
        {visibleViews.map((view, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return <ViewContainer key={index}>{view}</ViewContainer>;
        })}
      </Animated.ScrollView>
    </Container>
  ) : null;
};

TabView.defaultProps = {
  initialRoute: null,
};

export default TabView;
