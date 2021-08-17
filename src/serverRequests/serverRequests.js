const db = "http://localhost:5000";

export const checkIfUserExists = async (name) => {
  const response = await fetch(`${db}/users?name=${name}`);
  const json = await response.json();
  return typeof (await json)[0] === "object" ? true : false;
};

export const getUserId = async (name) => {
  return fetch(`${db}/users?name=${name}`)
    .then((response) => response.json())
    .then((json) => json[0].id);
};

export const createNewUser = async (name) => {
  const newUser = { name: name.toLowerCase() };
  fetch(`${db}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  }).then((result) => console.log(result));
};

export const getUsersList = async (userId) => {
  try {
    return fetch(`${db}/todos?userId=${userId}`).then((response) =>
      response.json()
    );
  } catch (err) {
    console.log(err);
  }
};
export const sendNewTodo = async (userId, text) => {
  const timeAdded = new Date();
  const newTodo = {
    userId: userId,
    text: text,
    done: false,
    added: timeAdded,
  };
  fetch(`${db}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  }).then((result) => console.log(result));
};

export const updateTodo = async (id, oldText, newText) => {
  const timeUpd = new Date();
  const updatedTodo =
    oldText === newText
      ? { text: newText }
      : { text: newText, updated: timeUpd };
  fetch(`${db}/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo),
  }).then((result) => console.log(result));
};

export const toggleDone = async (id, doneStatus) => {
  const updatedTodo = { done: !doneStatus };
  fetch(`${db}/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo),
  }).then((result) => console.log(result));
};

export const deleteTodo = (id) => {
  fetch(`${db}/todos/${id}`, { method: "DELETE" });
};
