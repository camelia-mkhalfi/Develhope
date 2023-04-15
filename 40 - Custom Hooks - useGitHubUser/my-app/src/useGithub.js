import { useState, useEffect } from "react";

export function useGithub(name) {
  const [user, setUser] = useState();

  async function requestGit() {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();
    console.log(data);
    return data;
  }

  useEffect(() => {
    requestGit().then(data => {
      setUser(data.login);
    });
  }, [name]);

  return user;
}
