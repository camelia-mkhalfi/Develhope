import React, { useState, useEffect } from "react";

export function GitHubUser(props) {
  const [user, setUser] = useState();

  async function requestGit() {
    const response = await fetch(`https://api.github.com/users/${props.username}`);
    const data = await response.json();
    console.log(data);
    return data;
  }

  useEffect(() => {
    requestGit().then(data => {
      setUser(data.login);
    });
  }, [props.username]);

  return (
    <div>
      <ul>
        <li>{user}</li>
      </ul>
    </div>
  );
}
