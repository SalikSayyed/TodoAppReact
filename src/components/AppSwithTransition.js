import React, { useState } from 'react';
import { CSSTransition,SwitchTransition } from 'react-transition-group';
function AppSwitchTransition() {
    const [state, setState] = useState(false);
    return (
      <SwitchTransition>
        <CSSTransition
          key={state ? "Goodbye, world!" : "Hello, world!"}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
        >
          <button onClick={() => setState(state => !state)}>
            {state ? "Goodbye, world!" : "Hello, world!"}
          </button>
        </CSSTransition>
      </SwitchTransition>
    );
   }

   export default AppSwitchTransition;