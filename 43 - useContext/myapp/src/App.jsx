import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export class App extends React.Component {
  state = {
    language: "it",
  };

  onChange = (event) => {
    const {value, textContent} = event.target;
    this.setState({ language: value});
  }

  render() {
    return (
      <div>
        <select value="it" onChange={this.onChange}>
          <option value="it">Italian</option>
          <option value="en">English</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}
