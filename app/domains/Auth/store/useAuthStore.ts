import createSecureStorage from '@oxvo-mobile/domains/Auth/helpers/createSecureStorage';
import createCompanySettingsSlice, {
  CompanySettingsSlice,
} from '@oxvo-mobile/domains/Auth/store/createCompanySettingsSlice';
import createLogoutSlice, { LogoutSlice } from '@oxvo-mobile/domains/Auth/store/createLogoutSlice';
import createTokenSlice, { TokenSlice } from '@oxvo-mobile/domains/Auth/store/createTokenSlice';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { AUTH_STORAGE_KEYS } from '../constants/auth';

const storage = createSecureStorage();

type AuthState = CompanySettingsSlice & LogoutSlice & TokenSlice;

const useAuthStore = create<AuthState>()(
  persist(
    (...a) => ({
      ...createCompanySettingsSlice(...a),
      ...createLogoutSlice(...a),
      ...createTokenSlice(...a),
    }),
    {
      name: AUTH_STORAGE_KEYS.CORE,
      storage,
    }
  )
);

export default useAuthStore;
