import { create } from 'zustand';

type TabViewState = {
  currentTabViewKey: string | null;
};

type TabViewActions = {
  setCurrentTabViewKey: (currentTabViewKey: string | null) => void;
  resetCurrentTabViewKey: () => void;
};

type Auth = TabViewState & TabViewActions;

const useTabViewStore = create<Auth>()((set) => ({
  token: null,
  setCurrentTabViewKey: (currentTabViewKey) => set({ currentTabViewKey }),
  resetCurrentTabViewKey: () => set({ currentTabViewKey: null }),
  currentTabViewKey: null,
}));

export default useTabViewStore;
