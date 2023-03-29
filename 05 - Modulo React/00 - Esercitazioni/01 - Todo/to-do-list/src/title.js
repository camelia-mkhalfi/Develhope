import React from "react";

export class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  render() {
    return (
      <input text="name" placeholder="Inserisci titolo del compito" value={this.state.inputText} onChange={this.handleInputChange}></input>
    );
  }
}
