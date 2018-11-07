import React from 'react';

const Increment = ( {increment} ) => {
    return (
        <button type='button' onClick={ () => increment() }>+</button>
    );
}

export default Increment;