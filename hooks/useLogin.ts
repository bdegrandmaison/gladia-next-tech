import { useCallback } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import { LoginRequest, User } from '../interfaces';
import axiosClient from '../lib/axiosClient';

export const useLogin = ({ username, password }: LoginRequest): UseMutationResult<User, Error> => {
  const postLoginDetails = useCallback(async () => {
    const credentials: LoginRequest = { username, password };

    return await axiosClient.post<LoginRequest, User>('api/login', credentials);
  }, [username, password]);

  return useMutation(['loginMutation', username, password], async () => postLoginDetails());
};
