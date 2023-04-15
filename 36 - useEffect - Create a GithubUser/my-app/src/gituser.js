import React, { useState, useEffect } from "react";

export function GitHubUser(props) {
  const [user, setUser] = useState();

  async function requestGit() {
    const response = await fetch(`https://api.github.com/users/${props.name}`);
    const data = await response.json();
    console.log(data);
    return data;
  }

  useEffect(() => {
    requestGit().then(data => {
      setUser(data.login);
    });
  }, []);

  return (
    <div>
      <h1>View name gitUser</h1>
      <p>{user}</p>
    </div>
  );
}
