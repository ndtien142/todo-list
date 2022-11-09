import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateNextIdApiUseQuery } from '../api/todosApiTS';
import { queryKey } from '../react-query/constants';

export const useUpdateNextId = () => {
  const queryClient = useQueryClient();
  return useMutation(updateNextIdApiUseQuery, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey.nextId]);
      console.log('Update id succeed');
    },
  });
};
