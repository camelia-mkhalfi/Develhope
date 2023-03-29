import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
  render() {
    const age = 20;
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        {age && <Age age={age}/> }
      </div>
    );
  }
}
