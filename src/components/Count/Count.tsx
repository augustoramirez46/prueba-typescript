import React from 'react';

interface CountProps {
    count: number;
    onDecrease: () => void;
    onIncrease: () => void;

}

export const Count: React.FC<CountProps> = ({ count, onIncrease, onDecrease }) => {
    /*
        const [count, setCount] = React.useState(0);
    
        const handleDecrease = () => {
            setCount(count - 1);
        }
    
        const handleIncrease = () => {
            setCount(count + 1);
        }
    */
    return <div>
        <button onClick={onDecrease}>-</button>
        {count}
        <button onClick={onIncrease}>+</button>
    </div>;
}