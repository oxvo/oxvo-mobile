import signUp, { SignUpPayload } from '@oxvo-mobile/domains/Auth/services/signUp';
import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import { useMutation } from '@tanstack/react-query';

const useSignUp = () => {
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    mutationFn: async (payload: SignUpPayload) => {
      const { accessToken, refreshToken } = await signUp(payload);

      return { accessToken, refreshToken };
    },
    onSuccess: (data) => {
      setTokens(data);
    },
  });
};

export default useSignUp;
