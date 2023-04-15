import { useState, useEffect } from "react";

export function useGithub(username) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data);
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    }

    fetchUser();
  }, [username]);

  return [user, loading, error];
}
