import { createSelector } from 'reselect';

const selectItems = (state) => state.contacts.items;
const selectFilter = (state) => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectLoading = (state) => state.contacts.isLoading;
export { selectFilter };
export const selectAllContacts = (state) => state.contacts.items;
