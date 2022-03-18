import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { changeFilter } from './contacts-actions';

export const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});
export const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContact.pending]: () => null,
  [addContact.rejected]: () => null,
  [deleteContact.pending]: (_, action) => action.payload,
  [deleteContact.rejected]: (_, action) => action.payload,
});
export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
//   changeFilter,
// } from './contacts-actions';

// const items = createReducer([], {
//   [fetchContactSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [...state, payload],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const loading = createReducer(false, {
//   [fetchContactRequest]: () => true,
//   [fetchContactSuccess]: () => false,
//   [fetchContactError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {
//   [fetchContactError]: (_, action) => action.payload,
//   [fetchContactRequest]: () => null,
//   [addContactRequest]: () => null,
//   [deleteContactRequest]: () => null,
//   [deleteContactError]: (_, action) => action.payload,
//   [addContactError]: (_, action) => action.payload,
// });

// export default combineReducers({
//   items,
//   filter,
//   loading,
//   error,
// });
