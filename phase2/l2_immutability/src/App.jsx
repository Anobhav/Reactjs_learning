import { useState } from "react"
function App() {
  const [items, setItems] = useState(["apple", "banana", "grapes"])

  return (
    <>
      {/* List rendering */}
      {items.map((item, index) => (
        <p key={index}>
          fruit name: {item} | index: {index}
        </p>
      ))}

      {/* Add mango */}
      <button onClick={() => setItems([...items, "mango"])}>
        Add Mango
      </button>

      {/* Remove banana */}
      <button
        onClick={() =>
          setItems(items.filter(item => item !== "banana"))
        }
      >
        Remove Banana
      </button>

      {/* Update apple → grapes */}
      <button
        onClick={() =>
          setItems(
            items.map(item =>
              item === "apple" ? "grapes" : item
            )
          )
        }
      >
        Update Apple
      </button>
    </>
  )
}

export default App