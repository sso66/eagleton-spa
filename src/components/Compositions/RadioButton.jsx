// RadioButton.jsx
// Date: 7/15/2020
// Note: React Composition Model: React Children

import React from 'react';

const RadioButton = (props) => {
    return (
        <div>
            <form>
                <label htmlFor='Radio'>
                   <input  type='radio' />
                    {props.value}
                </label>
            </form>
        </div>
    )
}

export default RadioButton;