import { useState } from "react"
import Counter from "./components/Counter"
function App() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div>
      {isVisible && <Counter />}
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </div>
  )
}

export default App
