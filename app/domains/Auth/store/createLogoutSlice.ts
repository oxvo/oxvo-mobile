import { StateCreator } from 'zustand';

type LogoutState = {
  isLogoutProcessing: boolean;
};

type LogoutActions = {
  setIsLogoutProcessing: (isLogoutProcessing: boolean) => void;
};

export type LogoutSlice = LogoutState & LogoutActions;

const logoutSlice: StateCreator<LogoutSlice> = (set): LogoutSlice => ({
  isLogoutProcessing: false,
  setIsLogoutProcessing: (isLogoutProcessing: boolean) => set(() => ({ isLogoutProcessing })),
});

export default logoutSlice;
