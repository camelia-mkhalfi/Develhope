import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
  render() {
    const age = 25;
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        <Age age={age}/>
      </div>
    );
  }
}
