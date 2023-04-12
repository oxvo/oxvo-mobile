import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@oxvo-mobile/constants/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthenticated = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem(STORAGE_KEYS.TOKEN);

        setIsAuthenticated(!!token);
      } catch (error) {
        throw new Error('Error getting token from storage');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  return { isAuthenticated, isLoading };
};

export default useAuthenticated;
