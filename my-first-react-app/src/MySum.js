import { useState, useMemo, useEffect, useContext } from 'react';

const MySum = () => {
    const [state, setState] = useState(0);
    const onInputChange = (event) => {
        setState(parseInt(event.target.value));
    };

    const calculation = (state) => {
        let count = 0;
        for(let i=1; i<=state; i++) {
            count += i;
        }
        return count;
    };

    const myCount = useMemo(() => calculation(state), [state]);

    return <div>
        <input type='number' value={state} onChange={(event) => onInputChange(event)} />
        <div>{myCount}</div>
    </div>
};

export default MySum;