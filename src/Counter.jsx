import './Counter.css'
function Counter() {
    let count = 0;
    setInterval(() => {
        count++;
        console.log(count);
    }, 1000);
    return <><span className="counter">Hello counter: {count}</span></>
}
export default Counter