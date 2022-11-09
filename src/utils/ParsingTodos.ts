import { TodoState } from '../types/TypesOfTodo';

export const parCompetedTodo = (
  todoId: string | number,
  allTodos: TodoState[]
): TodoState[] => {
  const transArr = JSON.parse(JSON.stringify(allTodos));
  transArr.forEach((tdo: TodoState) => {
    if (tdo.id !== todoId) return;
    tdo.completed = !tdo.completed;
  });
  return transArr;
};

export const parDeleteTodo = (
  todoId: string | number,
  allTodos: TodoState[]
): TodoState[] => {
  const transArr = JSON.parse(JSON.stringify(allTodos));
  return transArr.filter((tdo: TodoState) => tdo.id !== todoId);
};

export const parChangeNameTodo = (
  todoId: string | number,
  allTodos: TodoState[],
  newName: string
): TodoState[] => {
  const transArr = JSON.parse(JSON.stringify(allTodos));
  transArr.forEach((tdo: TodoState) => {
    if (tdo.id !== todoId) return;
    tdo.name = newName;
  });
  return transArr;
};
