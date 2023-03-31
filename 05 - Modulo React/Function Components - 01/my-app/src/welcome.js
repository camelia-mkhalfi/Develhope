import React from "react";

export function Welcome(props){
  return(
      <div>
        {props.name && <h1>Welcome, <strong>{props.name}</strong></h1>}
        {!props.name && <h1>Welcome, world!</h1>}
      </div>
  )
}
