import React from "react";
import { useParams } from "react-router-dom";

export function ShowGithubUser({ children }) {
  const { username } = useParams();

  return <div>{React.cloneElement(children, { name: username })}</div>;
}
