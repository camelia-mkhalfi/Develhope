import React from "react";
import { useGithub } from "./useGithub";

export function GitHubUser(props) {
  const [user, error] = useGithub(props.name);

  if (error) {
    return <div>Error Github user data</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} alt="logo" height="10%" width="10%"/>
      <h3>Repository public: {user.public_repos}</h3>
    </div>
  );
}
