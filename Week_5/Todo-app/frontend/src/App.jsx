import { useState } from "react";
import CreateTodo from "./components/Create-Todo";
import Todos from "./components/Todos";

function App(){
  const [todos, setTodo] = useState([]);
  async function todoArr(){
    let todoArr = await fetch('http://localhost:3001/todos');
    let data = await todoArr.json();
    console.log(data.todos);
    setTodo(data.todos);
  }
  todoArr();
  return (
    <div>
      <CreateTodo />
      <Todos todosData={todos}/>
    </div>
  )
}

export default App;