import { StateCreator } from 'zustand';

type NullableString = string | null;

type TokensState = {
  accessToken: NullableString;
  refreshToken: NullableString;
};

type TokensActions = {
  setTokens: (tokens: { accessToken: NullableString; refreshToken: NullableString }) => void;
  removeTokens: () => void;
};

export type TokensSlice = TokensState & TokensActions;

const createTokensSlice: StateCreator<TokensSlice> = (set): TokensSlice => ({
  accessToken: null,
  refreshToken: null,
  setTokens: ({ accessToken, refreshToken }) => set({ accessToken, refreshToken }),
  removeTokens: () => set({ accessToken: null, refreshToken: null }),
});

export default createTokensSlice;
