
export const DECREMENT = 'decrement';
export const INCREMENT = 'increment';

export const incrementNum = () => {
    return {
        type: INCREMENT
    };
}

export const decrementNum = () => {
    return {
        type: DECREMENT
    };
}