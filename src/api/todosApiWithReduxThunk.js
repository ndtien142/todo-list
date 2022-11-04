const baseUrl = `https://todolist-33a7c-default-rtdb.firebaseio.com/todo.json`;
const idUrl = `https://todolist-33a7c-default-rtdb.firebaseio.com/nextId.json`;

// Get data using thunk creator
export const getTodosApi = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};
// Get latest id (next id)
export const getLatestId = async () => {
  const response = await fetch(idUrl);
  const data = await response.json();
  return data;
};
// Update id
export const updateId = async (id) => {
  const response = await fetch(idUrl, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(id),
  });
  const data = await response.json();
  return data;
};
// Update todo
export const updateTodoApi = async (todos) => {
  const response = await fetch(baseUrl, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      ...todos,
    }),
  });
  const data = await response.json();
  return data;
};
// Add new data to server
export const addTodoApi = async (todo) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
};
// Delete one todo
export const deleteTodoApi = async (todo) => {
  await fetch(baseUrl + `/${todo.id}`, {
    method: "DELETE",
  });
};
