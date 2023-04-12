import { STORAGE_KEYS } from '@oxvo-mobile/constants/global';
import signIn, { SignInPayload } from '@oxvo-mobile/domains/Auth/services/signIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

const useSignIn = () => {
  return useMutation(async ({ email, password }: SignInPayload) => {
    const { accessToken } = await signIn({ email, password });

    await AsyncStorage.setItem(STORAGE_KEYS.TOKEN, accessToken);
  });
};

export default useSignIn;
