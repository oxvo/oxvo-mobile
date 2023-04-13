import { MutationCache, QueryCache, QueryClient, isError } from '@tanstack/react-query';
import toast from 'react-native-toast-message';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      //   if (isError(error) && query.state.data !== undefined) {
      console.log('ADSDSsdsdsdsdsdsadasdsadsadsadsadsadsadsadsasdsadsadsdsadsadsadsadsaSDS');
      toast.show({
        type: 'error',
        text1: 'Something went wrong:',
        text2: error.message,
      });
      //   }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: any) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      //   if (isError(error) && query.state.data !== undefined) {
      console.log('ADSDSsdsdsdsdsdsadasdsadsadsadsadsadsadsadsasdsadsadsdsadsadsadsadsaSDS');
      toast.show({
        type: 'error',
        text1: 'Something went wrong:',
        text2: error.message,
      });
      //   }
    },
  }),
});

export default queryClient;
