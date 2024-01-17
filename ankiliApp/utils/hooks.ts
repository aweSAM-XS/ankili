import { USER_STORAGE_KEY } from './../data/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export const useId = () => {
  const [hasId, setHasId] = useState(false);

  useEffect(() => {
    const loadId = async () => {
      const id = await AsyncStorage.getItem(USER_STORAGE_KEY);
      if (!id) {
        const randomUserId = Math.random().toString(36);
        await AsyncStorage.setItem(USER_STORAGE_KEY, randomUserId);
      }
      setHasId(true);
    };
    loadId();
  }, []);

  return [hasId];
};
