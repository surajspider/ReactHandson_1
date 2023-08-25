import React, { useState } from 'react'
import FuncCompo from './FuncCompo';
import ClassCompo from './ClassCompo';

function DisplayData() {
    const [states, statesf] = useState(false);
    const [cstates, statesc] = useState(false);
    console.log(states);//printing state of func compo
    console.log(cstates);//printing state of class compo
    return (
        <div>
            <button id="funcbutton" onClick={() => statesf(!states)}>To see styling in functional component</button>
            <button id="classbutton" onClick={() => statesc(!cstates)}>To see styling in class component</button>
            <br></br>
            {states ? <FuncCompo /> : ""}

            {cstates ? <ClassCompo /> : ""}
        </div>
    )
}

export default DisplayData