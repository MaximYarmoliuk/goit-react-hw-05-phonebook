import contactActions from "./contactsAction";
import axios from "axios";

const ownerId = "f9f2a270-49b1-45db-b304-75c015e05a15";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/v1";
axios.defaults.headers["Authorization"] = ownerId;
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
