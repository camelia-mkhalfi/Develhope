import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList(props) {
  const [usernames, setUsernames] = useState([]);
  const [usernameToAdd, setUsernameToAdd] = useState("");
  function addUser() {
    setUsernames([...usernames, usernameToAdd]);
    setUsernameToAdd("");
    console.log(usernames);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={usernameToAdd}
          onChange={(event) => setUsernameToAdd(event.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
      {usernames.length > 0 &&
        usernames.map((el, index) => {
          return <Link style={{display:"block"}} to={`/users/${el}`} key={index}>{el}</Link>;
        })
      }
      <Outlet/>
    </div>
  );
}
