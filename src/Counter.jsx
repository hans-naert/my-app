import { useState } from 'react'
import { useEffect } from 'react'
import './Counter.css'
function Counter() {
    let [count, setCount] = useState(0);
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