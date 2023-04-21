import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';
import changePassword, {
  ChangePasswordPayload,
} from '@oxvo-mobile/domains/Me/services/changePassword';

import { useMutation } from '@tanstack/react-query';

const useChangePassword = () => {
  const { onLogout } = useAuthStore((state) => state);
  return useMutation({
    mutationFn: async (payload: ChangePasswordPayload) => {
      const { message } = await changePassword(payload);

      return message;
    },
    onSuccess: () => {
      setTimeout(() => {
        onLogout();
      }, 3000);
    },
  });
};

export default useChangePassword;
