import React from 'react';


const Form = (props) => {
    
    const inputTextHandler = (e)=>{
        props.setInputText(e.target.value);
    };

    const submitTodoHandler= (e)=>{
          e.preventDefault();
          props.setTodos([
              ...props.todos,{text : props.inputText,completed : false,id : Math.random() *100}
          ])
          
          props.setInputText('');
    };

    const statusHandler = (e)=>{
                   console.log(`Status Changed!=> ${e.target.value}`);
                   props.setStatus(e.target.value);

                   
    }

    return (
        <form>
            <div id="inputButton">
            <input type='text' className='todo-input' onChange={inputTextHandler} value=
            {props.inputText}></input>
            
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>

                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value='all'>
                        All
                    </option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
            </div>
        </form>
    )
}

export default Form;