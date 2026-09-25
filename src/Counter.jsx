import { useState } from 'react'
import { useEffect } from 'react'
import './Counter.css'
function Counter({initialCount=0, end=20}) {
    initialCount=parseInt(initialCount);
    end=parseInt(end);
    let [count, setCount] = useState(initialCount);
    useEffect(() => {
    if(count>=end) return;
    const interval = setInterval(() => {
        setCount(count => count + 1);
        setCount(count =>count + 1);
        console.log(count);
    }, 1000);
    return () => clearInterval(interval);
    });

    return <><span className="counter">Hello counter: {count}</span>
    <div>{(count<end) ? 'Still counting...' : 'Done!'}
          {(() => {
            if(count<end) {
              return 'Still counting...';
            } else {
              return 'Done!';
            }
          })()}</div></>
}
export default Counter