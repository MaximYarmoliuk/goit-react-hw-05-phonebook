import React from "react";
import ThemeContext from "../contexts/ThemeContext/ThemeContext";

const withTheme = WrappedComponent => {
  return function WithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <WrappedComponent
            {...props}
            theme={theme}
          />
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;
