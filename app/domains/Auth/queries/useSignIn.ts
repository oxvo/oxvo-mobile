import signIn, { SignInPayload } from '@oxvo-mobile/domains/Auth/services/signIn';
import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import { useMutation } from '@tanstack/react-query';

const useSignIn = () => {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: async ({ email, password }: SignInPayload) => {
      const { accessToken } = await signIn({ email, password });

      return accessToken;
    },
    onSuccess: (data) => {
      setToken(data);
    },
  });
};

export default useSignIn;
