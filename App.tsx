import 'react-native-gesture-handler';

import React, { useCallback, useEffect, useState } from 'react';

import queryClient from '@oxvo-mobile/libs/queryClient';
import RootNavigator from '@oxvo-mobile/navigation/RootNavigator';

import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { QueryClientProvider } from '@tanstack/react-query';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Colors, Spacings, Typography } from 'react-native-ui-lib';

import { GestureHandlerRootView } from './App.styled';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Poppins_400Regular, Poppins_600SemiBold });

        Colors.loadColors({
          pink: '#FF69B4',
          gold: '#FFD700',
        });

        Typography.loadTypographies({
          h1: { fontSize: 22, fontWeight: '300', lineHeight: 0 },
          h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
        });

        Spacings.loadSpacings({
          // page: isSmallScreen ? 16 : 20,
        });
      } catch (e) {
        console.warn('An error occurred while preparing the app:', e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync().catch((error) => {
        console.error('An error occurred:', error);
      });
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        {/* eslint-disable react/style-prop-object */}
        <StatusBar style="auto" />
        {/* eslint-enable react/style-prop-object */}
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
          <Toast />
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
