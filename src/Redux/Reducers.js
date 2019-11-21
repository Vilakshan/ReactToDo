export default function(state = { toDoList: [] }, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDoList: [
          ...state.toDoList,
          ...[{ id: action.id, text: action.newToDoText }]
        ]
      };
    default:
      return state;
  }
}
