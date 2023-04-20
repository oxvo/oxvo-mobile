import { PUBLIC_ROUTES } from '@oxvo-mobile/constants/routes';
import inviteCode, { InviteCodePayload } from '@oxvo-mobile/domains/Auth/services/inviteCode';
import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';
import { PublicStackNavigationProp } from '@oxvo-mobile/navigation/types';

import { useNavigation } from '@react-navigation/native';

import { useMutation } from '@tanstack/react-query';

const useInviteCode = () => {
  const { navigate } = useNavigation<PublicStackNavigationProp>();
  const setCompanySettings = useAuthStore((state) => state.setCompanySettings);
  return useMutation({
    mutationFn: async (code: InviteCodePayload) => {
      const inviteCodeData = await inviteCode(code);

      return inviteCodeData;
    },
    onSuccess: (data) => {
      setCompanySettings(data);

      navigate(PUBLIC_ROUTES.SIGN_UP);

      return data;
    },
  });
};

export default useInviteCode;
