import { Provider } from "react-redux";

import store from "./store";

import TodoList from "./TodoLIst";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
