import { List } from '@mui/material';
import { useEffect } from 'react';
import Todo from './Todo';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { replaceNextId, replaceTodos } from './TodoListSlice';
import { RemainingTodo } from '../../services/RemainingTodo';
import TodosLoading from '../../components/loading/TodosLoading';
import {
    getNextIdApiUseQuery,
    getTodosApiUseQuery,
} from '../../api/todosApiTS';
import { useQuery } from '@tanstack/react-query';
import { queryKey } from '../../react-query/constants';

function TodoList() {
    const todoList = useAppSelector(RemainingTodo);
    const dispatch = useAppDispatch();
    // Get todos from server
    const { data: todosFromServer, isLoading } = useQuery(
        [queryKey.todos],
        getTodosApiUseQuery,
        {
            refetchOnWindowFocus: false,
            staleTime: 10000,
        }
    );
    // Get next id from server
    const { data: nextIdFromServer } = useQuery(
        [queryKey.nextId],
        getNextIdApiUseQuery,
        {
            refetchOnWindowFocus: false,
            staleTime: 10000,
            // refetchInterval: 2000, //=> auto refetch data
            // refetchIntervalInBackground: true
        }
    );
    // Dispatch todos to redux
    // Parallel queries
    useEffect(() => {
        if (isLoading) return;
        if (typeof todosFromServer === 'object')
            dispatch(replaceTodos(todosFromServer));
        if (typeof nextIdFromServer === 'number')
            dispatch(replaceNextId(nextIdFromServer));
    }, [todosFromServer, isLoading, dispatch, nextIdFromServer]);
    // Dispatch next id to redux
    return (
        <List
            sx={{
                width: '100%',
                minWidth: 400,
                bgcolor: 'background.paper',
                mb: 3,
                overflow: 'auto',
                height: '200px',
            }}
        >
            {!isLoading &&
                todoList.map((todo) => {
                    return (
                        <Todo
                            name={todo.name}
                            completed={todo.completed}
                            id={todo.id}
                            key={todo.id}
                        ></Todo>
                    );
                })}
            {isLoading && <TodosLoading />}
        </List>
    );
}

export default TodoList;
