import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../ContactsForm/ContactsForm.module.css";

const ContactsForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact({ id: Date.now().toString(), ...values }));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.fieldContainer}>
            <Field
              type="text"
              name="name"
              className={styles.input}
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.fieldContainer}>
            <Field
              type="text"
              name="phone"
              className={styles.input}
              placeholder="Phone"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className={styles.error}
            />
          </div>
          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactsForm;
