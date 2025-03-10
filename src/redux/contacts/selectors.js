import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName } from "../filters/slice";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);
