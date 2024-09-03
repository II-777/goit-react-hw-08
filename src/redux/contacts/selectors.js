export const selectLoading = (state) => state.contacts.isLoading;
export const selectFilter = (state) => state.contacts.filter;
export const selectAllContacts = (state) => state.contacts.items;
export const selectFilteredContacts = (state) => {
  const { items, filter } = state.contacts;
  return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
};
