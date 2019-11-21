let toDoId = 0;
export function addToDo(text) {
  return {
    type: "ADD_TODO",
    newToDoText: text,
    id: ++toDoId
  };
}
