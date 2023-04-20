import useLogout from '@oxvo-mobile/domains/Auth/hooks/useLogout';
import changePassword, {
  ChangePasswordPayload,
} from '@oxvo-mobile/domains/Me/services/changePassword';

import { useMutation } from '@tanstack/react-query';

const useChangePassword = () => {
  const { onLogout } = useLogout();
  return useMutation({
    mutationFn: async (payload: ChangePasswordPayload) => {
      const { message } = await changePassword(payload);

      return message;
    },
    onSuccess: (data) => {
      console.log('Password change success:', data);

      setTimeout(() => {
        onLogout();
      }, 3000);
    },
  });
};

export default useChangePassword;
