import React from "react";

export class Button extends React.Component {
  state = {
    savedData: null,
  };

  handleSave = (inputText, selectValue) => {
    const newData = { inputText, selectValue };
    this.setState({ savedData: newData });
  };

  render() {
    const { savedData } = this.state;
    return (
      <div>
        <button onClick={this.handleSave}>Aggiungi</button>
        {savedData && (
          <div>
            <p>Input text: {savedData.inputText}</p>
            <p>Select value: {savedData.selectValue}</p>
          </div>
        )}
      </div>
    );
  }
}
