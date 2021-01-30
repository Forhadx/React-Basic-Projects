import React, { useState } from 'react';

import './input.css';

const InputField = () =>{
    const [val, setVal] = useState('');

    return(
        <div className="divField">
            <h3>Textarea </h3>
            <textarea
                type="text"
                value={val}
                placeholder = "Write here..."
                onChange={e=> setVal(e.target.value)} />
            <p> {val} </p>
        </div>
    );
}

export default InputField;