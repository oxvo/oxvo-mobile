// Reference @link: https://github.com/pmndrs/zustand/issues/1242#issuecomment-1299322491
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CompanySettingsSlice } from '@oxvo-mobile/domains/Auth/store/createCompanySettingsSlice';
import { TokensSlice } from '@oxvo-mobile/domains/Auth/store/createTokensSlice';

import { ME_STORAGE_KEYS } from '@oxvo-mobile/domains/Me/constants/global';

import { StateCreator } from 'zustand';

type LogoutState = {
  isLogoutProcessing: boolean;
};

type RemoveTokensAction = Pick<TokensSlice, 'removeTokens'>;

type ResetCompanySettingsAction = Pick<CompanySettingsSlice, 'resetCompanySettings'>;

type LogoutActions = {
  setIsLogoutProcessing: (isLogoutProcessing: boolean) => void;
  onLogout: (params?: { purgeCompanySettingsInStorage: boolean }) => Promise<void>;
};

type CombinedSharedActions = RemoveTokensAction & ResetCompanySettingsAction;

export type LogoutSlice = LogoutState & LogoutActions;

const logoutSlice: StateCreator<CombinedSharedActions & LogoutSlice, [], [], LogoutSlice> = (
  set,
  get
) => {
  return {
    isLogoutProcessing: false,
    setIsLogoutProcessing: (isLogoutProcessing: boolean) => set(() => ({ isLogoutProcessing })),
    onLogout: async (
      { purgeCompanySettingsInStorage } = { purgeCompanySettingsInStorage: false }
    ) => {
      try {
        get().setIsLogoutProcessing(true);

        await AsyncStorage.removeItem(ME_STORAGE_KEYS.FETCH_ME);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        get().removeTokens();

        if (purgeCompanySettingsInStorage) {
          get().resetCompanySettings();
        }
      } catch (error) {
        console.error('An error occurred while logging out: ', error);
      } finally {
        get().setIsLogoutProcessing(false);
      }
    },
  };
};

export default logoutSlice;
