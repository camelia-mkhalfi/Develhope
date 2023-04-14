import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1> Welcome, {this.props.name} </h1>
      </div>
    );
  }
}
