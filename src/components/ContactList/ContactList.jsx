// src/components/ContactList.jsx
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import { useEffect, useState } from "react";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [contacts, filter]);

  return (
    <div>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
