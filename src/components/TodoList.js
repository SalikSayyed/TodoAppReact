import React from 'react';
import Todo from './Todo';
const TodoList = ({todos,setTodos,filteredTodos}) => {
    return (
        <div className="todo-container">
            <div className="todo-div">
            <ul className="todo-list">
                {
                filteredTodos.map((todo)=>(
                    <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>
                ))
            }
            </ul>
            </div>
        </div>
    )
}

export default TodoList;