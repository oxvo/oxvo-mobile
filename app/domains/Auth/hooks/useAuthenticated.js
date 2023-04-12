import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@oxvo-mobile/constants/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthenticated = () => {
  const [authenticated, setAuthenticated] = (useState <boolean) | (null> null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await AsyncStorage.getItem(STORAGE_KEYS.TOKEN);

      setAuthenticated(!!token);
    };

    checkAuthentication();
  }, []);

  return authenticated;
};

export default useAuthenticated;
