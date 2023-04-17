import { useNavigation } from '@react-navigation/native';
import { PUBLIC_ROUTES } from '@oxvo-mobile/constants/routes';
import inviteCode, { InviteCodePayload } from '@oxvo-mobile/domains/Auth/services/inviteCode';
import { PublicStackNavigationProp } from '@oxvo-mobile/navigation/types';
import authStore from '@oxvo-mobile/store/authStore';
import { useMutation } from '@tanstack/react-query';

const useInviteCode = () => {
  const { navigate } = useNavigation<PublicStackNavigationProp>();
  const setCompanySettings = authStore((state) => state.setCompanySettings);
  return useMutation(
    async (code: InviteCodePayload) => {
      const inviteCodeData = await inviteCode(code);

      return inviteCodeData;
    },
    {
      onSuccess: (data) => {
        setCompanySettings(data);
        navigate(PUBLIC_ROUTES.SIGN_UP);

        return data;
      },
    }
  );
};

export default useInviteCode;
