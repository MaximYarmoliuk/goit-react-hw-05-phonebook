import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import NameofContactExist from "../NameOfContactExist/NameOfContactExist";
import FillInEntryFields from "../FillInEntryFields/FillInEntryFields";
import styles from "./ContactForm.module.css";
import nameExistStyles from "./NameExist.module.css";
import entryFieldsStyles from "./FillInEntryFields.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    nameExistErr: false,
    entryFieldsErr: false
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const checkLength = string => string.length < 1;
    const checkOnExist = this.props.contacts.find(
      contact => contact.name === name
    );

    if (checkLength(`${name}`) || checkLength(`${number}`)) {
      this.setState({ entryFieldsErr: true });
      setTimeout(() => {
        this.setState({ entryFieldsErr: false });
      }, 1000);
      return;
    }

    if (checkOnExist) {
      this.setState({ nameExistErr: true });
      setTimeout(() => {
        this.setState({ nameExistErr: false });
      }, 1000);
      return;
    }

    this.props.addContact({ name, number });

    this.setState({ name: "", number: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.entryFieldsErr}
          classNames={entryFieldsStyles}
          timeout={250}
          unmountOnExit
        >
          <FillInEntryFields />
        </CSSTransition>
        <CSSTransition
          in={this.state.nameExistErr}
          classNames={nameExistStyles}
          timeout={250}
          unmountOnExit
        >
          <NameofContactExist />
        </CSSTransition>
        <form className={styles.contactForm} onSubmit={this.handleSubmit}>
          <label className={styles.contactLabel}>
            Name
            <input
              className={styles.contactInput}
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.contactLabel}>
            Number
            <input
              className={styles.contactInput}
              type="text"
              value={this.state.number}
              name="number"
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.contactSubmit} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state)
});

const mapDispatchToProps = {
  addContact: contactsOperations.addContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
