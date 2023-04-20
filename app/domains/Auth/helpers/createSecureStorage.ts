import * as SecureStore from 'expo-secure-store';
import { PersistStorage, StorageValue } from 'zustand/middleware';

const createSecureStorage = <PersistState>(): PersistStorage<PersistState> => ({
  getItem: async (key: string): Promise<StorageValue<PersistState> | null> => {
    try {
      const item = await SecureStore.getItemAsync(key);
      return item ? (JSON.parse(item) as StorageValue<PersistState>) : null;
    } catch (error) {
      console.log('getItem error:', error);
      return null;
    }
  },
  setItem: async (key: string, value: StorageValue<PersistState>) => {
    try {
      await SecureStore.setItemAsync(key, JSON.stringify(value));
    } catch (error) {
      console.log('setItem error:', error);
    }
  },
  removeItem: async (key: string) => {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.log('removeItem error:', error);
    }
  },
});

export default createSecureStorage;
