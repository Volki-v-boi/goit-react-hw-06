import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "../redux/contactsSlice";
import filtersReducer from "../redux/filtersSlice";

const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
