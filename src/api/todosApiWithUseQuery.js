const baseUrl = `https://todolist-33a7c-default-rtdb.firebaseio.com/todo.json`;
const idUrl = `https://todolist-33a7c-default-rtdb.firebaseio.com/nextId.json`;

// Get todo api using useQuery
export const getTodosApiUseQuery = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export const addNewTodosApiUseQuery = async (data) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Add failed!");
  }
  return response.json();
};
export const updateTodosApiUseQuery = async (data) => {
  const response = await fetch(baseUrl, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Update failed!");
  }
  return response.json();
};

// Next Id
export const getNextIdApiUseQuery = async () => {
  const response = await fetch(idUrl);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export const updateNextIdApiUseQuery = async (data) => {
  const response = await fetch(idUrl, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Update failed!");
  }
  return response.json();
};
