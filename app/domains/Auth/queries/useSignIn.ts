import signIn, { SignInPayload } from '@oxvo-mobile/domains/Auth/services/signIn';
import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import { useMutation } from '@tanstack/react-query';

const useSignIn = () => {
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    mutationFn: async ({ email, password }: SignInPayload) => {
      const { accessToken, refreshToken } = await signIn({ email, password });

      return { accessToken, refreshToken };
    },
    onSuccess: (data) => {
      setTokens(data);
    },
  });
};

export default useSignIn;
