import React, {useState} from "react";
import { GitHubUser } from "./gituser";

export function GitHubList() {
  const [usernames, setUsernames] = useState([]);

  const handleAddUsername = (event) => {
    event.preventDefault();
    const input = event.target.elements.username;
    const username = input.value.trim();
    if (username) {
      setUsernames([...usernames, username]);
      input.value = "";
    }
  };

  return (
    <div>
      <form onSubmit={handleAddUsername}>
        <label>Add a Github username:</label>
        <input type="text" id="username" />
        <button type="submit">Add</button>
      </form>
      <div>
      <h4>List of users added:</h4>
        {usernames.map((username) => (
          <GitHubUser key={username} username={username} />
        ))}
      </div>
    </div>
  );
}