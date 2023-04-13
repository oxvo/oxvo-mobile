import { STORAGE_KEYS } from '@oxvo-mobile/constants/global';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';
import { PersistStorage, StorageValue, persist } from 'zustand/middleware';

type PersistState = {
  token: string | null;
};

type AuthState = {};

type AuthActions = {
  setToken: (token: string | null) => void;
  removeToken: () => void;
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

const jsonStorage = createJSONStorage(SecureStore);

const authStore = create<Auth>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      removeToken: () => set({ token: null }),
    }),
    {
      name: STORAGE_KEYS.TOKEN,
      storage: jsonStorage,
      partialize: (state) => ({ token: state.token }),
    }
  )
);

export default authStore;
