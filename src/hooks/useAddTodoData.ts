import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewTodosApiUseQuery } from '../api/todosApiTS';
import { queryKey } from '../react-query/constants';

export const useAddTodoData = () => {
  const queryClient = useQueryClient();
  return useMutation(addNewTodosApiUseQuery, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([queryKey.todos]);
      queryClient.invalidateQueries([queryKey.nextId]);
      console.log('Add succeed');
    },
  });
};
