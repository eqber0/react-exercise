import { useState } from "react"

function List({ contacts }) {
  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })

  console.log(filtered)

  return (
    <div>
      <input
        type="text"
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span className="contact__phone">({contact.phone_number})</span>
          </li>
        ))}
        {/* {contacts.map((contact, i) => (
          <li key={i}> {contact.phone_number} </li>
        ))} */}
        <p>Total contacts ({filtered.length})</p>
      </ul>
    </div>
  )
}

export default List
