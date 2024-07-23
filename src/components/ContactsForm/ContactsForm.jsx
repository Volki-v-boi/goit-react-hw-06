// src/components/ContactsForm.jsx
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useState } from "react";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact({ id: Date.now().toString(), name, phone }));
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactsForm;
