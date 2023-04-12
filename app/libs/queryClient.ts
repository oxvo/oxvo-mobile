import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ...default query options
    },
    mutations: {
      // ...default mutation options
    },
  },
});

export default queryClient;
