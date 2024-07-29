import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";
import ContactsForm from "../ContactsForm/ContactsForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContactsForm />
        <SearchBox />
        <ContactList />
      </PersistGate>
    </Provider>
  );
};

export default App;
