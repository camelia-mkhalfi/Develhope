import React from "react";
import { LanguageContext } from "./languageContext";
import { Text } from "./text";

export class DisplayLanguage extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">Inglese</option>
          <option value="it">Italiano</option>
        </select>

        <LanguageContext.Provider value={this.state.language}>
          <Text />
        </LanguageContext.Provider>
      </div>
    );
  }
}
