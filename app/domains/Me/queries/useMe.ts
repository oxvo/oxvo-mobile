import { useEffect } from 'react';

import { ME_QUERY_KEYS, ME_STORAGE_KEYS } from '@oxvo-mobile/domains/Me/constants/global';
import fetchMe, { MeResponse } from '@oxvo-mobile/domains/Me/services/fetchMe';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, useQueryClient } from '@tanstack/react-query';

async function saveSelectedQueryToStorage(data: object) {
  try {
    const key = ME_STORAGE_KEYS.FETCH_ME;
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving selected query:', error);
  }
}

const useMe = () => {
  const queryClient = useQueryClient();
  const queryFetchMe = useQuery<MeResponse>({
    queryKey: [ME_QUERY_KEYS.FETCH_ME],
    queryFn: async () => {
      const meData = await fetchMe();

      return meData;
    },
  });

  useEffect(() => {
    async function hydrateQueryFromStorage() {
      try {
        const savedData = await AsyncStorage.getItem(ME_STORAGE_KEYS.FETCH_ME);
        if (savedData) {
          const parsedData = JSON.parse(savedData) as MeResponse;
          queryClient.setQueryData<MeResponse>([ME_QUERY_KEYS.FETCH_ME], parsedData);
        }
      } catch (error) {
        console.error('Error hydrating query from storage:', error);
      }
    }

    hydrateQueryFromStorage();
  }, [queryClient]);

  useEffect(() => {
    if (queryFetchMe.data) {
      saveSelectedQueryToStorage(queryFetchMe.data);
    }
  }, [queryFetchMe.data]);

  return queryFetchMe;
};

export default useMe;
