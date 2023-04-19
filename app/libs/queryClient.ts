/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import toast from 'react-native-toast-message';

const showError = (error: any) => {
  toast.show({
    type: 'error',
    text1: 'Something went wrong:',
    text2: error?.response?.data?.error?.message || error?.errors?.[0]?.message || error.message,
  });
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      showError(error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: any) => {
      showError(error);
    },
  }),
});

export default queryClient;
