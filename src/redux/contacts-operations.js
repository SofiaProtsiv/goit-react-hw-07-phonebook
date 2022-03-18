import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//axios.defaults.baseURL = 'http://localhost:4040';
axios.defaults.baseURL = 'https://623481abdebd056201e6e520.mockapi.io/contacts';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);

    return contactId;
  }
);
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

// import {
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
//     deleteContactRequest,
//     deleteContactSuccess,
//     deleteContactError,
//     fetchContactRequest,
//     fetchContactSuccess,
//     fetchContactError,
//   } from './contacts-actions';
//   import axios from 'axios';
// export const addContact = (name, number) => dispatch => {
//   const contact = {
//     name,
//     number,
//   };
//   dispatch(addContactRequest());
//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };
// export const deleteContact = contactId => dispatch => {
//   dispatch(deleteContactRequest());

//   axios
//     .delete(`./contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch(error => dispatch(deleteContactError(error)));
// };
// export const fetchContacts = () => dispatch => {
//   dispatch(fetchContactRequest());

//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch(error => dispatch(fetchContactError(error)));
// };
