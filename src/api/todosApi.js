const baseUrl = `https://my-json-server.typicode.com/ndtien142/todoList/todo`;

// Get data
export const getTodosApi = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};
// Update todo
export const updateTodoApi = async (todo) => {
  const response = await fetch(baseUrl + `/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: todo.name,
      completed: todo.completed,
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
