import { InviteCodeResponse } from '@oxvo-mobile/domains/Auth/services/inviteCode';

import { StateCreator } from 'zustand';

type PersistState = {
  companySettings: InviteCodeResponse | null;
};

type CompanySettingsActions = {
  setCompanySettings: (companySettings: InviteCodeResponse) => void;
  resetCompanySettings: () => void;
};

export type CompanySettingsSlice = CompanySettingsActions & PersistState;

const createCompanySettingsSlice: StateCreator<CompanySettingsSlice> = (
  set
): CompanySettingsSlice => ({
  companySettings: null,
  setCompanySettings: (companySettings) => set({ companySettings }),
  resetCompanySettings: () => set({ companySettings: null }),
});

export default createCompanySettingsSlice;
