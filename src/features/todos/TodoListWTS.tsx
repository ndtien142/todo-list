import { Button, List, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addNewTodo, replaceNextId, replaceTodos } from './TodoListSlice';
import { RemainingTodo } from '../../services/RemainingTodo';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
    addNewTodosApiUseQuery,
    getNextIdApiUseQuery,
    getTodosApiUseQuery,
    updateNextIdApiUseQuery,
} from '../../api/todosApiTS';
import TodosLoading from '../../components/loading/TodosLoading';

function TodoList() {
    const [input, setInput] = useState('');
    const todoList = useAppSelector(RemainingTodo);
    const nextId = useAppSelector((state) => state.todoList.nextId);
    const dispatch = useAppDispatch();
    // Get todos from server
    const { data: todosFromServer, isFetching: isTodosFetching } = useQuery(
        ['todos'],
        getTodosApiUseQuery,
        {
            refetchOnWindowFocus: false,
        }
    );
    // Get next id from server
    const { data: nextIdFromServer, isFetching: isNextIdFetching } = useQuery(
        ['nextId'],
        getNextIdApiUseQuery,
        {
            refetchOnWindowFocus: false,
        }
    );
    const { mutate: addNewTodosServer } = useMutation(addNewTodosApiUseQuery);
    const { mutate: updateNextIdServer } = useMutation(updateNextIdApiUseQuery);
    // Dispatch todos to redux
    useEffect(() => {
        if (isTodosFetching) return;
        if (typeof todosFromServer === 'object')
            dispatch(replaceTodos(todosFromServer));
    }, [todosFromServer, isTodosFetching, dispatch]);
    // Dispatch next id to redux
    useEffect(() => {
        if (isNextIdFetching) return;
        if (typeof nextIdFromServer === 'number')
            dispatch(replaceNextId(nextIdFromServer));
    }, [nextIdFromServer, dispatch, isNextIdFetching]);
    // Handle
    const handleInputTodoChange = (event: any) => {
        setInput(event.target.value);
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (input.trim() === '') return;
        addNewTodosServer({ id: nextId, name: input, completed: false });
        updateNextIdServer(nextId + 1);
        dispatch(addNewTodo({ id: nextId, name: input, completed: false }));
        setInput('');
    };
    return (
        <Box minWidth={400}>
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
                {!isTodosFetching &&
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
                {isTodosFetching && <TodosLoading />}
            </List>
            <Box>
                <Box
                    component='form'
                    noValidate
                    autoComplete='off'
                    display='flex'
                    justifyContent='space-between'
                    gap={2}
                >
                    <TextField
                        sx={{ ml: 1, flex: 1 }}
                        placeholder='Add new todo'
                        inputProps={{ 'aria-label': 'add new todo' }}
                        onChange={handleInputTodoChange}
                        name='name'
                        required
                        autoFocus
                        value={input}
                    />
                    <Button
                        variant='contained'
                        startIcon={<SendIcon />}
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Add
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default TodoList;
