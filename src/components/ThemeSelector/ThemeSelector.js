import React from "react";
import styles from "./ThemeSelector.module.css";
import withTheme from "../../hoc/withTheme";

const ThemeSelector = ({ theme }) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{theme.type}</span>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={theme.type === "dark"}
        onChange={() => theme.toggleTheme()}
      />
    </div>
  );
};

export default withTheme(ThemeSelector);
