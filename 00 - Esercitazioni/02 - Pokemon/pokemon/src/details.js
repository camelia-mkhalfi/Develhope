import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./details.css";

export default function Detail() {
  const { name } = useParams();
  const [detail, setDetail] = useState();

  async function viewDetails() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    viewDetails().then((pokemon) => {
      setDetail(pokemon);
    });
  }, []);

  return (
    <div>
      <Link to={`/`} className="link">
        <button class="btn btn-primary">
          Indietro
        </button>
      </Link>

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
                <p key={index} className="info">
                  {" "}
                  {ability.ability.name}
                </p>
              ))}
            </div>
          )}
        </div>
      </center>
    </div>
  );
}
