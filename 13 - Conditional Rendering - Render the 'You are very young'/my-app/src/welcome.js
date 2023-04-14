import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
  render() {
    const age = 22;
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        <p>Your age is: {age > 18 ? <Age age={age} /> : <span> you are very young</span>}
        </p>
      </div>
    );
  }
}
