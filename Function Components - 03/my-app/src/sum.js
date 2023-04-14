import React from "react";

export function Sum({number = [3,7,1,8,1,0]}){
  const sum = (array) =>{
    let somma = 0;
    for (const key in array) {
      somma = somma + array[key];
      }
      return somma;
  }
  return(
      <div>
        <h1>Sum numbers props</h1>
        {number && <h2>The sum of the number are: {sum(number)}</h2>}
      </div>
  )
}