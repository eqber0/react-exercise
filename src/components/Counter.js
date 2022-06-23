import { useEffect, useState } from "react"

function Counter() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log("sad")
    const interval = setInterval(() => {
      setNumber((n) => n + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    console.log("number state güncellendin.")
  }, [number])

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase +1</button>
    </div>
  )
}

export default Counter
