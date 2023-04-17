import { STORAGE_KEYS } from '@oxvo-mobile/constants/global';
import { InviteCodeResponse } from '@oxvo-mobile/domains/Auth/services/inviteCode';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';
import { PersistStorage, StorageValue, persist } from 'zustand/middleware';

type PersistState = {
  token: string | null;
};

type AuthState = {
  companySettings: InviteCodeResponse | null;
};

type AuthActions = {
  setToken: (token: string | null) => void;
  removeToken: () => void;
  setCompanySettings: (companySettings: InviteCodeResponse) => void;
  resetCompanySettings: () => void;
};

type Auth = AuthState & AuthActions & PersistState;

const createJSONStorage = (storage: typeof SecureStore): PersistStorage<PersistState> => ({
  getItem: async (key: string): Promise<StorageValue<PersistState> | null> => {
    try {
      const item = await storage.getItemAsync(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.log('getItem error:', error);
      return null;
    }
  },
  setItem: async (key: string, value: StorageValue<PersistState>) => {
    try {
      await storage.setItemAsync(key, JSON.stringify(value));
    } catch (error) {
      console.log('setItem error:', error);
    }
  },
  removeItem: async (key: string) => {
    try {
      await storage.deleteItemAsync(key);
    } catch (error) {
      console.log('removeItem error:', error);
    }
  },
});

const storage = createJSONStorage(SecureStore);

const authStore = create<Auth>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      removeToken: () => set({ token: null }),
      setCompanySettings: (companySettings) => set({ companySettings }),
      resetCompanySettings: () => set({ companySettings: null }),
      companySettings: null,
    }),
    {
      name: STORAGE_KEYS.TOKEN,
      storage,
      partialize: (state) => ({ token: state.token, companySettings: state.companySettings }),
    }
  )
);

export default authStore;