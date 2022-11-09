import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewTodosApiUseQuery } from '../api/todosApiTS';

export const useAddTodoData = () => {
  const queryClient = useQueryClient();
  return useMutation(addNewTodosApiUseQuery, {
    onSuccess: (data) => {
      queryClient.setQueryData(['todos'], (oldQueryData: any) => {
        console.log(data);
        return [...oldQueryData, data];
      });
    },
  });
};
