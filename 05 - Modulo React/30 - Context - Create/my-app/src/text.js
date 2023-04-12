import React from "react";
import { LanguageContext } from "./languageContext";

const Strings = {
  en: {
    text: "My first context wrap",
  },
  it: {
    text: "Il mio primo contenitore",
  },
};

export class Text extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <div>{Strings[language].text}</div>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

