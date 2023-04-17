import { SELECTED_QUERY_STORAGE_KEY } from '@oxvo-mobile/domains/Me/constants/global';
import authStore from '@oxvo-mobile/store/authStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQueryClient } from '@tanstack/react-query';

const useLogout = () => {
  const queryClient = useQueryClient();
  const removeToken = authStore((state) => state.removeToken);

  return async () => {
    queryClient.removeQueries();

    await AsyncStorage.removeItem(SELECTED_QUERY_STORAGE_KEY);

    removeToken();
  };
};

export default useLogout;
