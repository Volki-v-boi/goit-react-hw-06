// src/components/Contact.jsx
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
}
