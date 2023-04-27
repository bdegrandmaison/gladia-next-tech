import { useCallback } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import axiosClient from '../lib/axiosClient';

type Result = {
  message: string;
};

export const useCheckUser = (username: string): UseMutationResult<Result, Error> => {
  const postUsernameForCheck = useCallback(async () => {
    return await axiosClient.post<string, Result>('api/check-username', { username });
  }, [username]);

  return useMutation(['checkUserMutation', username], async () => postUsernameForCheck());
};
