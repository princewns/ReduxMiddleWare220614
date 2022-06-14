import "./App.css";
import CounterContainer from "./containers/ConterContainer";
import TodosContainer from "./containers/TodosContainer";
import CounterHookContainer from "./containers/CounterHookContainer";
import TodosHookContainer from "./containers/TodosHookContainer";
import CounterAsyncContainer from "./containers/CounterAsyncContainer";
import NewsItemAsyncContainer from "./containers/NewsItemAsyncContainer";

function App() {
  return (
    <div className="App">
      <NewsItemAsyncContainer/>
      <hr/>
      <CounterContainer/>
      <CounterHookContainer/>
      <CounterAsyncContainer/>
      <hr></hr>
      <TodosContainer/>
      <TodosHookContainer/>
    </div>
  );
}

export default App;
