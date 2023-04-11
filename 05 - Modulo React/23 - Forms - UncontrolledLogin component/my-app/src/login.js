import React, { createRef } from "react";

export class Login extends React.Component {
  _formRef = createRef();

  onLogin = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const password = event.target.elements.password.value;

    console.log(name, password);
  };

  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.onLogin}>
          <input placeholder="name" name="name" />
          <input placeholder="password" type="password" name="password" />
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
