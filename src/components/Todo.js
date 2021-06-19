import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Todo = ({ todo, setTodos, todos, inn }) => {
    const [deleteStatus, deleter] = useState(true);
    const deleteHandler = () => {
        deleter(false);
        console.log(deleteStatus);
        setTimeout(setTodos(todos.filter(
            (element) => element.id !== todo.id
        )), 2000);

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

        <CSSTransition key={todo.id} timeout={{ exit: 7000, appear: 7000 }} in={deleteStatus} classNames="todo" unmountOnExit={true} appear={true}>
            <div className="todo">
                <li className={`todo-items ${todo.completed ? "todo-completed" : ""}`}>{todo.text}</li>
                <button className="complete-btn" onClick={completeHandler}>
                    <i className={`fas ${todo.completed ? 'fa-plus' : 'fa-check'} `}></i>
                </button>
                <button className="trash-btn" onClick={deleteHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </CSSTransition>


    )

}

export default Todo;