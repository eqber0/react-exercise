import { useState, useEffect } from "react"
import "./styles.css"

import List from "./List/index"
import Form from "./Form/index"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Bilgehan",
      phone_number: "232323",
    },
    {
      fullname: "Ahmet",
      phone_number: "009921",
    },
  ])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])
  return (
    <div id="container">
      <h2> Contacts</h2>

      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
