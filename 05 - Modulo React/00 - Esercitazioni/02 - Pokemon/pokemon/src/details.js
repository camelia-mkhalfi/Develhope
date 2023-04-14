import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";

export default function Detail() {
  const { name } = useParams();
  const [detail, setDetail] = useState();

  async function viewDetails() {
    console.log("prima");

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    console.log("eccomiiiii" + data);
    return data;
  }

  useEffect(() => {
    viewDetails().then((pokemon) => {
      setDetail(pokemon);
    });
  }, []);

  return (
    <center>
    <div className="container-details">
      {detail && (
        <div className="container-details-card">
          <h1>{name}</h1>
          <img src={detail.sprites.front_default} alt="img" />
          <p className="title">Height</p>
          <p className="info"> {detail.height}</p>
          <p className="title">Weight</p>
          <p className="info"> {detail.weight}</p>
          <p className="title">Abilities</p>
          {detail.abilities.map((ability, index) => (
            <p key={index} className="info"> {ability.ability.name}</p>
          ))}
        </div>
      )}
    </div>
    </center>
  );
}
