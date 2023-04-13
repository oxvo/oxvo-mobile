import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import queryClient from '@oxvo-mobile/libs/queryClient';
import RootNavigator from '@oxvo-mobile/navigation/RootNavigator';
import authStore from '@oxvo-mobile/store/authStore';
import { QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from './App.styled';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  console.log('authStore.getState().token -->', authStore.getState().token);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn('An error occurred while preparing the app:', e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
          <Toast />
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
export default App;