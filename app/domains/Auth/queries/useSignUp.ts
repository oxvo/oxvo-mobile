import signUp, { SignUpPayload } from '@oxvo-mobile/domains/Auth/services/signUp';
import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import { useMutation } from '@tanstack/react-query';

const useSignUp = () => {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: async (payload: SignUpPayload) => {
      const { accessToken } = await signUp(payload);

      return accessToken;
    },
    onSuccess: (data) => {
      setToken(data);
    },
  });
};

export default useSignUp;
