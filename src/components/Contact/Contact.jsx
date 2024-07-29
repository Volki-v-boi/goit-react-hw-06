import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "../Contact/Contact.module.css";

const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <span>
        {name}: {phone}
      </span>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
