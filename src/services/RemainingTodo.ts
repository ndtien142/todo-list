import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

export const RemainingTodo = createSelector(
  (state: RootState) => state.filters.search,
  (state: RootState) => state.todoList.todos,
  (state: RootState) => state.filters.status,
  (search, todos, status) => {
    if (status === 'All') {
      return todos.filter((tdo) =>
        tdo.name.trim().toLowerCase().includes(search.toLowerCase())
      );
    }
    return todos.filter(
      (tdo) =>
        tdo.name.trim().toLowerCase().includes(search.toLowerCase()) &&
        (status === 'Completed' ? tdo.completed : !tdo.completed)
    );
  }
);
