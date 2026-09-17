import useCounter from "./useCounter"

function App() {
  const { count, increment, decrement, reset } = useCounter()

  return (
    <>
      <h1>Custom Hook Counter</h1>

      <p>Counter: {count}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App