import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
const AppSample = (props) => {

    const [inProp, setInProp] = useState(true);
    const duration = 300;
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out,bottom ${duration}ms ease-in-out,font-size 100ms ease-in-out`,
        opacity: 0,
        position: 'relatieve',
        bottom: '-15px'
    }
    const transitionStyle = {
        entering: { opacity: 0, bottom: '0px', fontSize: '1px' },
        entered: { opacity: 1, bottom: '0px', },
        exiting: { opacity: 0.1, fontSize: '10px' },
        exited: { opacity: 0, fontSize: '5px' },
    }

    return (
        <div class="SampleDivision">

            <h1>-Transition Animation Practice-</h1>
            <Transition in={inProp} timeout={300} unmountOnExit={true} mountOnEnter={true} appear={true}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyle[state]
                    }}>
                        <h1>Hello World</h1>
                        <h2>Inside State : {state}</h2>
                    </div>
                )
                }

            </Transition>
            <button onClick={() => setInProp(!inProp)}>
                Click to Enter
            </button>
        </div>
    );

}

export default AppSample;