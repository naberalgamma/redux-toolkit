import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  decrement,
  increment,
  removeTodo,
} from "./toolkit/reducerSlice";

const AddAsyncTodo = (text) => {
  return async (dispatch) =>
    setTimeout(() => {
      dispatch(addTodo(text));
    }, 1000);
};

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>addTodo</button>
      <button onClick={() => dispatch(removeTodo())}>removeTodo</button>
      <button onClick={() => dispatch(AddAsyncTodo(prompt()))}>
        Async Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
