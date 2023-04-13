import signIn, { SignInPayload } from '@oxvo-mobile/domains/Auth/services/signIn';
import authStore from '@oxvo-mobile/store/authStore';
import { useMutation } from '@tanstack/react-query';

const useSignIn = () => {
  const setToken = authStore((state) => state.setToken);

  return useMutation(
    async ({ email, password }: SignInPayload) => {
      const { accessToken } = await signIn({ email, password });

      return accessToken;
    },
    {
      onSuccess: (data) => {
        setToken(data);
      },
    }
  );
};

export default useSignIn;
