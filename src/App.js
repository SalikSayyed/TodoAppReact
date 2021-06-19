
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';
import React, { useState , useEffect} from 'react';

function App() {
  //! useState method.. whatever inside type of state variable [] means object
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  //! specific state for filter
  const [status,setStatus] = useState("all");
  const [filteredTodos,filterer]= useState([]);
  //! UseEffect funciton used to run given function each time state changes
  
  const filterHandler = ()=>{
    switch(status){
      case "completed":
       filterer(todos.filter(todo=>todo.completed))
       break;

      case "uncompleted":
        filterer(todos.filter(todo=>!todo.completed))
       break;
      default:
        filterer(todos);
        break;
    }
  }
  //! This runs once!
 useEffect(()=>{
   getLocalTodos();
  
 },[]);
 useEffect(()=>{
   saveLocalTodos();
 },[todos])
 //! this runs at each state change of todos and status
  useEffect(()=>{
    //running this each time todos, and status changes
    filterHandler();
    
  },
  [todos,status]) 

  //! SAVING LOCALLY

  const saveLocalTodos = ()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  
  const getLocalTodos = ()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
     
  }

  return (
    <div className="App">
      <h1>ToDo App! </h1>
      <Form filterer={filterer} inputText={inputText} setStatus={setStatus} setInputText={setInputText} setTodos={setTodos} todos={todos} />

      <TodoList status={status} todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );

}

export default App;
