import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactActions from "./contactsActions";

const onAddAction = (state, action) => {
  return [...state, action.payload];
};

const onRemoveAction = (state, { payload }) => {
  return state.filter(contact => contact.id !== payload);
};

const onChangeFilter = (_, { payload }) => {
  return payload;
};

const items = createReducer([], {
  [contactActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactActions.addContactsSuccess]: onAddAction,
  [contactActions.removeContactsSuccess]: onRemoveAction
});

const filter = createReducer("", {
  [contactActions.changeFilter]: onChangeFilter
});

const error = createReducer(null, {
  [contactActions.fetchError]: (_, { payload }) => payload,
  [contactActions.addError]: (_, { payload }) => payload,
  [contactActions.removeError]: (_, { payload }) => payload
});

const loading = createReducer(false, {
  [contactActions.fetchContactsRequest]: () => true,
  [contactActions.fetchContactsSuccess]: () => false,
  [contactActions.fetchContactsError]: () => false,

  [contactActions.addContactsRequest]: () => true,
  [contactActions.addContactsSuccess]: () => false,
  [contactActions.addContactsError]: () => false,

  [contactActions.removeContactsRequest]: () => true,
  [contactActions.removeContactsSuccess]: () => false,
  [contactActions.removeContactsError]: () => false
});

export default combineReducers({
  items,
  filter,
  error,
  loading
});
