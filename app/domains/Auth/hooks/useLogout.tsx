import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';
import { ME_STORAGE_KEYS } from '@oxvo-mobile/domains/Me/constants/global';

import AsyncStorage from '@react-native-async-storage/async-storage';

type UseLogoutProps = {
  purgeCompanySettingsInStorage?: boolean;
};

const useLogout = ({ purgeCompanySettingsInStorage = false }: UseLogoutProps = {}) => {
  const { isLogoutProcessing, setIsLogoutProcessing, removeTokens, resetCompanySettings } =
    useAuthStore((state) => state);

  const onLogout = async () => {
    try {
      setIsLogoutProcessing(true);

      await AsyncStorage.removeItem(ME_STORAGE_KEYS.FETCH_ME);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      removeTokens();

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
