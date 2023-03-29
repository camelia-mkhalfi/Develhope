import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
  render() {
    const age = 40;
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        {age >18 && age < 65 && <Age age={age}/> }
      </div>
    );
  }
}
