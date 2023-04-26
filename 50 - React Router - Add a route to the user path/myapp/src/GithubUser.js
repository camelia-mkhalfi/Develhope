import { useEffect, useState } from "react";

export function GithubUser({ username = "" }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if(response.status !== 200){
            setError("User not found")
            throw new Error("User not found");
        }else{
            return response.json();
        }
      })
      .then((user) => setUser(user))
      .catch((error) => setError(error.message));
  }, [username]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      {user && (
        <div>
          <h1>{user.login}</h1>
          <h2>{user.name}</h2>
          <img
            src={user.avatar_url}
            alt="avatar"
            width="300px"
            height="300px"
          />
          <br />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            Github link
          </a>
        </div>
      )}
      {error && <h1 className="text-red-500">{error}</h1>}
    </div>
  );
}
