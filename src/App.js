import { Provider } from "react-redux";

import store from "./store";

import TodoList from "./TodoLIst";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
