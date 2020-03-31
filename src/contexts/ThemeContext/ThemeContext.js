import React, { Component, createContext } from "react";

const Context = createContext();

export default class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  toggleTheme = () => {
    this.setState({
      type: this.state.type === "dark" ? "light" : "dark"
    });
  };

  state = {
    type: "light",
    themeConfig: {
      light: {
        headerBg: "#F7B30C",
        fontColor: "black",
        bodybg: "white"
      },
      dark: {
        headerBg: "#3c3c3c",
        fontColor: "white",
        bodybg: "black"
      }
    },
    toggleTheme: this.toggleTheme
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
