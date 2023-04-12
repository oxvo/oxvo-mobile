import { STORAGE_KEYS } from '@oxvo-mobile/constants/global';
import { SignUpPayload } from '@oxvo-mobile/domains/Auth/services/signUp';
import signUp from '@oxvo-mobile/domains/Auth/services/signUp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

const useSignUp = () => {
  return useMutation(async (payload: SignUpPayload) => {
    const { accessToken } = await signUp(payload);

    await AsyncStorage.setItem(STORAGE_KEYS.TOKEN, accessToken);
  });
};

export default useSignUp;
