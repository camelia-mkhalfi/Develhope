async function getPokemon() {

  const area = document.getElementById("textArea");
  const select = document.getElementById("select");

  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`);
  let jsonRes = await response.json();
  //console.log(jsonRes);
  let orderedPokemon = jsonRes.results.sort((a,b) => {
    if (a.name < b.name) return -1;
    else return 1;
  });
  const pokemonB = orderedPokemon.filter((pokemon) => pokemon.name.startsWith("b"));
  console.log(pokemonB);

  pokemonB.forEach((data) => {
    const option = document.createElement("option");
    option.text = data.name;
    option.value = data.name;
    select.appendChild(option);
  });

  select.addEventListener("change", async (event) => {
    const pokemonId = event.target.value;
    const featuresResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const featuresJson = await featuresResponse.json();
    let clear = "";
    for (const feature of featuresJson.abilities) {
      clear += "<li>" + feature.ability.name + "</li>";
    }
    area.innerHTML = clear;
  });
}

getPokemon();