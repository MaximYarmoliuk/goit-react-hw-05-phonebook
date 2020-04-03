import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import withTheme from "../../hoc/withTheme";
import ContactForm from ".././ContactForm/ContactForm";
import ContactList from ".././ContactList/ContactList";
import Filter from ".././Filter/Filter";
import AppBar from ".././AppBar/AppBar";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import styles from "./App.module.css";
import contactListStyles from "./ContactListStyles.module.css";
import filterStyles from "./FilterStyles.module.css";
import Loader from "react-loader-spinner";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { themeConfig, type } = this.props.theme;
    return (
      <div
        className={styles.container}
        style={{
          color: themeConfig[type].fontColor,
          background: themeConfig[type].bodybg
        }}
      >
        {this.props.isLoadingContacts && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={50}
            width={50}
            style={{ position: "absolute", left: "50%" }}
          />
        )}

        <AppBar />

        <ContactForm />

        <CSSTransition
          in={this.props.contacts.length >= 2}
          timeout={250}
          classNames={filterStyles}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <CSSTransition
          in={this.props.contacts.length > 0}
          timeout={250}
          classNames={contactListStyles}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  isLoadingContacts: state.contacts.loading
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts
};

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(App));
