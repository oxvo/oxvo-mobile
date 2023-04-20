import { StateCreator } from 'zustand';

type TokenState = {
  token: string | null;
};

type TokenActions = {
  setToken: (token: string | null) => void;
  removeToken: () => void;
};

export type TokenSlice = TokenState & TokenActions;

const crateTokenSlice: StateCreator<TokenSlice> = (set): TokenSlice => ({
  token: null,
  setToken: (token) => set({ token }),
  removeToken: () => set({ token: null }),
});

export default crateTokenSlice;
