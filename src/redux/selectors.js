import { createSelector } from "@reduxjs/toolkit";

export const TodoListSelector = (state) => state.todoList.todos;
export const SearchFilterSelector = (state) => state.filters.search;
export const StatusFilterSelector = (state) => state.filters.status;
export const isChangeSelector = (state) => state.todoList.isChange;
export const nextIdSelector = (state) => state.todoList.nextId;
export const StatusTodosSelector = (state) => state.todoList.status;

export const RemainingTodo = createSelector(
  TodoListSelector,
  SearchFilterSelector,
  StatusFilterSelector,
  (todoList, search, status) => {
    if (status === "All")
      return todoList.filter((tdo) =>
        tdo.name.toLowerCase().includes(search.toLowerCase())
      );
    return todoList.filter((tdo) => {
      return (
        tdo.name.toLowerCase().includes(search.toLowerCase()) &&
        (status === "Completed" ? tdo.completed : !tdo.completed)
      );
    });
  }
);
