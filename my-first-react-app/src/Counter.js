import { useState } from 'react';
import './Counter.css';

const initialCountValue = 0;
const initialInputValue = '';

// {
//     count: 0,
//     myInputValue: ''
// }

export const Counter = (props) => {

    const [count, setCounter] = useState(initialCountValue);
    const [myInputValue, setMyInputValue] = useState(initialInputValue);

    const handleIncrementClick = () => {
        // state mutation
        setCounter(count + 1);
    }

    const handleDecrementClick = () => {
        // state mutation
        setCounter(count - 1);
    }

    const handleResetClick = () => {
        // state mutation
        setCounter(initialCountValue);
        setMyInputValue(initialInputValue);
    }

    const handleInputChange = (event) => {
        setMyInputValue(event.target.value);
    }

    return (
        <div className={props.className}>
            <div>My Counter Component</div>
            <input type="text" value={myInputValue} onChange={(event) => handleInputChange(event)} />
            <div>
                <button className='increment-btn' onClick={() => handleIncrementClick()}>Increment</button>
                <button className='decrement-btn' onClick={() => handleDecrementClick()}>Decrement</button>
                <button className='reset-btn' onClick={() => handleResetClick()}>Reset</button>
            </div>
            <div>Count: {count}</div>
        </div>
    );
}

export default Counter;