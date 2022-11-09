import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodosApiUseQuery } from '../api/todosApiTS';
import { queryKey } from '../react-query/constants';

export const useUpdateTodoData = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodosApiUseQuery, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([queryKey.todos]);
      console.log('Update todo succeed');
    },
  });
};
