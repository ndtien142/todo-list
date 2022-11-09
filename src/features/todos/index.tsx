import { Box } from '@mui/system'
import React from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoListWTS';

const Todos = () => {
    return (
        <Box minWidth={400}>
            <TodoList />
            <AddTodo />
        </Box>
    )
}

export default Todos