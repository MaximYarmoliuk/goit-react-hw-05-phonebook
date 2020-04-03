import contactActions from "./contactsActions";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg3MTg5OGNiMjc5MTAwMTc4MDMzZjAiLCJpYXQiOjE1ODU5MTE5NjB9.p3YX2CofMChqS9NlGGl4i-jzupaHLdzlBNGhfZeQ8K8"

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
axios.defaults.headers["Authorization"] = token;
axios.defaults.headers.post["Content-Type"] = "application/json";

const addContact = ({ name, number }) => dispatch => {
  dispatch(contactActions.addContactsRequest());

  axios
    .post("/contacts", {
      name,
      number
    })
    .then(({ data }) => dispatch(contactActions.addContactsSuccess(data)))
    .catch(err => dispatch(contactActions.addContactsError(err)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactActions.fetchContactsSuccess(data)))
    .catch(err => dispatch(contactActions.fetchContactsError(err)));
};

const removeContact = contactId => dispatch => {
  dispatch(contactActions.removeContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactActions.removeContactsSuccess(contactId)))
    .catch(err => dispatch(contactActions.removeContactsError(err)));
};

export default {
  addContact,
  fetchContacts,
  removeContact
};
