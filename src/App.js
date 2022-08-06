import "./App.css";
import CounterApp from "./components/CounterApp";
import CounterUseReducer from "./components/CounterUseReducer";
import TodoUseReducer from "./components/TodoUseReducer";

function App() {
  return (
    <div>
      <CounterApp />
      <CounterUseReducer />
      <TodoUseReducer />
    </div>
  );
}

export default App;
