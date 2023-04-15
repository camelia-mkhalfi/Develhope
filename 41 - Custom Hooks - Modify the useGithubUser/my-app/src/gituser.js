import React from "react";
import { useGithub } from "./useGithub";

export function GitHubUser(props) {
  const [user, loading, error, fetchUser] = useGithub(props.name);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <button onClick={fetchUser}>Fetch User</button>
    </div>
  );
}
