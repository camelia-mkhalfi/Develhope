import React from "react";

export class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
    };
  }
  handleSelectChange = (event) => {
    this.setState({ selectValue: event.target.value });
  }
  render() {
    return (
      <select name="state" value={this.state.selectValue} onChange={this.handleSelectChange}>
        <option value="" disabled>
          --Please choose an option--
        </option>
        <option value="option1">Completato</option>
        <option value="option2">Non completato</option>
      </select>
    );
  }
}
