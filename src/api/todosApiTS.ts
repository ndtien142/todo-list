import { TodoState } from '../types/TypesOfTodo';

const baseUrl: string = `https://todolist-33a7c-default-rtdb.firebaseio.com/todo.json`;
const idUrl: string = `https://todolist-33a7c-default-rtdb.firebaseio.com/nextId.json`;

// Get todo api using useQuery
export const getTodosApiUseQuery = async (): Promise<TodoState[] | string> => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
export const addNewTodosApiUseQuery = async (
  data: TodoState
): Promise<unknown> => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log(data);
  if (!response.ok) {
    throw new Error('Add failed!');
  }
  // interface Key {
  //   name: string;
  // }
  // interface Response {
  //   [index: string]: TodoState;
  // }
  // const responseKey: Key = await response.json();
  // const result = {} as Response;
  // result[responseKey.name] = data;
  return response.json();
};
export const updateTodosApiUseQuery = async (
  data: TodoState[]
): Promise<TodoState[] | string> => {
  const response = await fetch(baseUrl, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Update failed!');
  }
  return response.json();
};

// Next Id
export const getNextIdApiUseQuery = async (): Promise<number | null> => {
  const response = await fetch(idUrl);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
export const updateNextIdApiUseQuery = async (
  data: number
): Promise<number | string> => {
  const response = await fetch(idUrl, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Update failed!');
  }
  return response.json();
};
