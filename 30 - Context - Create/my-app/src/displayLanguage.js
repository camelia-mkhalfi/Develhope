import React from "react";
import { LanguageContext } from "./languageContext";

export class DisplayLanguage extends React.Component{

  state = {
    language: 'en',
  }

  handleLanguageChange = (event) =>{
    this.setState({
      language: event.target.value
    })
  }

  render(){
    return (
      <div>
        <select value={this.state.language} onChange={this.handleLanguageChange}>
          <option value="en">Inglese</option>
          <option value="it">Italiano</option>
        </select>

        <LanguageContext.Provider value={this.state.language}>
          {console.log(this.state.language)}
        </LanguageContext.Provider>
      </div>
    )
  }


}