import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Paginator from "./paginator";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchPokemonList() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(currentPage - 1) * 10}`);

    const data = await response.json();

    const detailsPokemon = [];

    data.results.forEach((pokemon) => {
      detailsPokemon.push(fetch(pokemon.url).then((res) => res.json()));
    });

    const fullData = await Promise.all(detailsPokemon);
    return fullData;
  }

  useEffect(() => {
    fetchPokemonList(currentPage).then((pokemon) => {
      setPokemonList(pokemon);
    });
  }, [currentPage]);

  return (
    <div>
      <div className="container">
        {pokemonList.length === 0 && "Loading..."}
        {pokemonList.length > 0 &&
          pokemonList.map((pokemon) => (
            <Link to={`details/${pokemon.name}`} className="link">
              <div className="container-card" key={pokemon.name}>
                <div>{pokemon.name}</div>
                <div>
                  <img
                    src={pokemon.sprites.front_default}
                    alt="img pokemon"
                  ></img>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="paginator">
        <Paginator highlited={currentPage} handleClick={setCurrentPage} />
      </div>
    </div>
  );
}
