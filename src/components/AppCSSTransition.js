import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

const AppCSSTransition = (props) => {
    const [inn, innMaker] = useState(false);
    const duration = 300;

    return (
        <div class='CSSTransitionCard'>
            <h1>CSS Animation Practice</h1>
            <CSSTransition in={inn} classNames="ani" timeout={300} unmountOnExit={true} mountOnEnter={true}>
               <div>
                <h2 className="title">This is an alert</h2>
                <button className = "btn" onClick={()=>{innMaker(!inn)}}>
                CSSTransition
            </button>
            </div>
            </CSSTransition>
            <button onClick={()=>{innMaker(!inn)}}>
                CSSTransition
            </button>
        </div>


    )
    }


    export default AppCSSTransition;