import { useEffect, useState } from "react"

const initalFormValues = { fullname: "", phone_number: "" }

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initalFormValues)

  useEffect(() => {
    setForm(initalFormValues)
  }, [contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (form.fullname === "" || form.phone_number === "") {
      return false
    }

    addContact([...contacts, form])
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="fullname"
            placeholder="Fullname"
            onChange={onChangeInput}
            value={form.fullname}
          />
        </div>
        <div>
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            onChange={onChangeInput}
            value={form.phone_number}
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
