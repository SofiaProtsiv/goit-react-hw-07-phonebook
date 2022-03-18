export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getvisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      number.includes(filter)
  );
};
