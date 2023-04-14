import React, { useState } from "react";

export function Login() {
  const [login, setLogin] = useState({
    name: '',
    password: '',
    button: false,
  });

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setLogin({ ...login, [name]: value });
  };

  function onLogin() {
    return setLogin({ ...login, button: true });
  }

    return (
      <div>
        <h3>State: {login.button.toString()}</h3>
        <input
          value={login.name}
          placeholder="input space"
          name="name"
          onChange={handleInput}
        />
        <input
          value={login.password}
          placeholder="password"
          type="password"
          name="password"
          onChange={handleInput}
        />
        <button
          disabled={!login.name || !login.password}
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    );
  }

