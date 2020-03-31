import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import propTypes from "prop-types";
import styles from "./ContactList.module.css";
import itemsStyles from "./Items.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <TransitionGroup component="ul" className={styles.container}>
        {contacts.map(({ id }) => (
          <CSSTransition key={id} timeout={250} classNames={itemsStyles}>
            <ContactListItem id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state)
});

export default connect(mapStateToProps)(ContactList);
