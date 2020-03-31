import React from "react";
import { CSSTransition } from "react-transition-group";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import styles from "./AppBar.module.css";
import logoStyles from "./Logo.module.css";
import themeSelector from "./ThemeSelector.module.css";

const AppBar = () => {
  return (
    <div className={styles.container}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={logoStyles}
        unmountOnExit
      >
        <h2>Phonebook</h2>
      </CSSTransition>
      
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={themeSelector}
        unmountOnExit
      >
        <ThemeSelector />
      </CSSTransition>
    </div>
  );
};

export default AppBar;
