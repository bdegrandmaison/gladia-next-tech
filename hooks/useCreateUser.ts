import { useCallback } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import axiosClient from '../lib/axiosClient';
import { CreateUserRequestBody } from '../interfaces';

type CreateUserResult = {
  ok: string;
};

export const useCreateUser = ({
  username,
  password,
  email,
}: CreateUserRequestBody): UseMutationResult<CreateUserResult, Error> => {
  const postUserCreation = useCallback(async () => {
    return await axiosClient.post<string, CreateUserResult>('api/create-user', {
      username,
      password,
      email,
    });
  }, [username, email, password]);

  return useMutation(['checkUserMutation', username, email], async () => postUserCreation());
};
