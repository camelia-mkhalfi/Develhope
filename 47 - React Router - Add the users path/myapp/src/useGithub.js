import { useState, useEffect } from "react";

export function useGithub(name) {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  async function requestGit() {
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
      setError("Error Github user data");
    }
  }

  useEffect(() => {
    requestGit().then((data) => {
      setUser(data);
    });
  }, []);

  return [user, error];
}