import { legacy_createStore as createStore } from 'redux';
import { CREATE, REMOVE, TOGGLE, initialTodos  } from "./src/actions/actions";

const todoReducer = (state = initialTodos, action) => {

  switch (action.type) {
    case CREATE:
      return {
        ...state,
        todos: state.todos.concat({
          id: payload.id,
          text: payload.text,
          done: false,
        }),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, done: !todo.done }
            : todo
        ),
      };
    default:
      return {...state};
  }
}

export default todoReducer;