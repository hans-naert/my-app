import { useState } from 'react'
import { useEffect } from 'react'
import './Counter.css'
function Counter({initialCount=0}) {
    initialCount=parseInt(initialCount);
    let [count, setCount] = useState(initialCount);
    useEffect(() => {
    const interval = setInterval(() => {
        setCount(count => count + 1);
        setCount(count =>count + 1);
        console.log(count);
    }, 1000);
    return () => clearInterval(interval);
    });

    return <><span className="counter">Hello counter: {count}</span></>
}
export default Counter