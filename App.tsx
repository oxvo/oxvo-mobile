import * as React from 'react';
import RootNavigator from '@oxvo-mobile/navigation/RootNavigator';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from './App.styled';

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <RootNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
