import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import { useEffect, useState } from "react";
import { selectNameFilter } from "../../redux/filtersSlice";
import styles from "../ContactList/ContactList.module.css";

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
      <ul className={styles.list}>
        {filteredContacts.map((contact) => (
          <li className={styles.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
