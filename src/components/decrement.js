import React from 'react';

const Decrement = ( {decrement} ) => {
    return (
        <button type='button' onClick={ () => decrement() }>-</button>
    );
}

export default Decrement;