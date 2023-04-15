import React from "react";
import { useGithub } from "./useGithub";

export function GitHubUser(props) {
  const user = useGithub(props.name);

  return (
    <div>
      <h1>View name gitUser</h1>
      <p>{user}</p>
    </div>
  );
}
