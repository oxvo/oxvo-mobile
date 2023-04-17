import { useEffect } from 'react';
import {
  ME_QUERY_KEYS,
  SELECTED_QUERY_STORAGE_KEY,
} from '@oxvo-mobile/domains/Me/constants/global';
import fetchMe from '@oxvo-mobile/domains/Me/services/fetchMe';
import { MeResponse } from '@oxvo-mobile/domains/Me/services/fetchMe';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const SELECTED_QUERY_KEY = ME_QUERY_KEYS.GET_ME;

async function saveSelectedQueryToStorage(data: object) {
  try {
    const key = SELECTED_QUERY_STORAGE_KEY;
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving selected query:', error);
  }
}

const useMe = () => {
  const queryClient = useQueryClient();
  const queryFetchMe = useQuery<MeResponse>([SELECTED_QUERY_KEY], async () => {
    const meData = await fetchMe();

    return meData;
  });

  useEffect(() => {
    async function hydrateQueryFromStorage() {
      try {
        const savedData = await AsyncStorage.getItem(SELECTED_QUERY_STORAGE_KEY);
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          queryClient.setQueryData<MeResponse>([SELECTED_QUERY_KEY], parsedData);
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
