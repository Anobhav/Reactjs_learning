import { useReducer } from "react"

function reducer(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 }
  }

  if (action.type === "decrement") {
    return { count: state.count - 1 }
  }

  if (action.type === "reset") {
    return { count: 0 }
  }

  return state
}

function useCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    dispatch({ type: "increment" })
  }

  function decrement() {
    dispatch({ type: "decrement" })
  }

  function reset() {
    dispatch({ type: "reset" })
  }

  return {
    count: state.count,
    increment,
    decrement,
    reset
  }
}

export default useCounter