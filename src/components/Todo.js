import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup,Transition } from 'react-transition-group'

const Todo = ({ todo, setTodos, todos, inn }) => {
    const [deleteStatus, deleter] = useState(true);
    const deleteHandler = () => {
      
        console.log(deleteStatus);
        setTimeout(setTodos(todos.filter(
            (element) => element.id !== todo.id
        )), 10000);

    }
   const duration = 3000;

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
        
        <CSSTransition key={todo.id} in={deleteStatus} classNames="ani" onExited={()=>{deleteHandler()}} timeout={300} unmountOnExit={true} mountOnEnter={true} >
            <div>
            <div className="todo ani">
                <li className={`todo-items ${todo.completed ? "todo-completed" : ""}`}>{todo.text}</li>
                <button className="complete-btn" onClick={completeHandler}>
                    <i className={`fas ${todo.completed ? 'fa-plus' : 'fa-check'} `}></i>
                </button>
                <button className="trash-btn" onClick={()=>{deleter(!deleteStatus)}}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
            </div>
        </CSSTransition>


    )

}



export default Todo;