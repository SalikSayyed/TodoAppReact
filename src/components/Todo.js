import React from 'react'

const Todo = ({ todo, setTodos, todos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(
            (element) => element.id !== todo.id
        ))
    }
    
    const completeHandler = () => {
        setTodos(todos.map(element => {
            if (element.id === todo.id) {
                return {
                    ...element,
                    completed: !element.completed
                }
            }
            else {
                return element;

            }
            
        }))
    }
    
    return (
        <div className="todo">
            <li className={`todo-items ${todo.completed ? "todo-completed" : ""}` }>{todo.text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )

}

export default Todo;