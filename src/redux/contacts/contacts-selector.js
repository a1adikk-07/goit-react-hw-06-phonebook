const getAllContacts = store => store.contacts;

export const getFilteredContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contacts => {
    const normalizedName = contacts.name.toLoverCase();
    return normalizedName.includes(normalizedFilter);
  });
  return filteredContacts;
};
