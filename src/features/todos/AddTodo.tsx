import {
    Button,
    Snackbar,
    TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { addNewTodo } from './TodoListSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAddTodoData } from '../../hooks/useAddTodoData';
import { useUpdateNextId } from '../../hooks/useUpdateNextId';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const AddTodo = () => {
    const [open, setOpen] = React.useState(false);
    const [input, setInput] = useState('');
    const nextId = useAppSelector((state) => state.todoList.nextId);
    const dispatch = useAppDispatch();
    const { mutate: addNewTodosServer } = useAddTodoData()
    const { mutate: updateNextIdServer } = useUpdateNextId();
    const handleInputTodoChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setInput(event.target.value);
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (input.trim() === '') return;
        setOpen(true)
        addNewTodosServer({ id: nextId, name: input, completed: false });
        updateNextIdServer(nextId + 1);
        dispatch(addNewTodo({ id: nextId, name: input, completed: false }));
        setInput('');
    };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
                    Add todo list success!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default AddTodo;
