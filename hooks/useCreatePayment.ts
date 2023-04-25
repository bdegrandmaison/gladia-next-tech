import { useCallback } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import axiosClient from '../lib/axiosClient';
import { PaymentIntentResult } from '@stripe/stripe-js';
import { PaymentRequest } from '../interfaces';

export const useCreatePayment = ({
  userId,
}: PaymentRequest): UseMutationResult<PaymentIntentResult, Error> => {
  const postCreatePayment = useCallback(async () => {
    return await axiosClient.post<null, PaymentIntentResult>('api/payment', {
      amount: 100000,
      userId,
    });
  }, [userId]);

  return useMutation(['createPaymentMutation'], async () => postCreatePayment());
};
