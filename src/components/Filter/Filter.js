import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";
import styles from "./Filter.module.css";

function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state)
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
