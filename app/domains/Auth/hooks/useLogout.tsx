import { ME_STORAGE_KEYS } from '@oxvo-mobile/domains/Me/constants/global';
import authStore from '@oxvo-mobile/store/authStore';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQueryClient } from '@tanstack/react-query';

type UseLogoutProps = {
  purgeCompanySettingsInStorage?: boolean;
};

const useLogout = ({ purgeCompanySettingsInStorage = false }: UseLogoutProps = {}) => {
  const queryClient = useQueryClient();
  const setIsLogoutProcessing = authStore((state) => state.setIsLogoutProcessing);
  const isLogoutProcessing = authStore((state) => state.isLogoutProcessing);
  const removeToken = authStore((state) => state.removeToken);
  const resetCompanySettings = authStore((state) => state.resetCompanySettings);

  const onLogout = async () => {
    try {
      setIsLogoutProcessing(true);

      queryClient.removeQueries();

      await AsyncStorage.removeItem(ME_STORAGE_KEYS.FETCH_ME);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      removeToken();

      if (purgeCompanySettingsInStorage) {
        resetCompanySettings();
      }
    } catch (error) {
      console.error('An error occurred while logging out: ', error);
    } finally {
      setIsLogoutProcessing(false);
    }
  };

  return { onLogout, isLogoutProcessing };
};

export default useLogout;
