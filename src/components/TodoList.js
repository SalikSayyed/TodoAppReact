import React from 'react';
import Todo from './Todo';
const TodoList = ({todos,setTodos,filteredTodos,inn}) => {
    return (
        <div className="todo-container">
            <div className="todo-div">
            <ul className="todo-list">
                {
                filteredTodos.map((todo)=>(
                    <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} inn={inn}/>
                ))
            }
            
            </ul>
            </div>
        </div>
    )
}

export default TodoList;