const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const pokemonImage = document.getElementById("pokemon-image");


const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defence = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const speacialDefence = document.getElementById("special-defense");
const speed = document.getElementById("speed");


const searchPokedex = async () => {
    try {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`);
        const data = await res.json();
        const { name, id, weight, height, stats, sprites, types } = data;

        pokemonName.innerHTML = `${name.toUpperCase()}`;
        pokemonId.innerHTML = ` #${id}`;
        pokemonWeight.textContent = weight;
        pokemonHeight.textContent = height;

        pokemonImage.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="pokemonImage" >`;
        pokemonTypes.innerHTML = types.map(type => `<span>${type.type.name.toUpperCase()}</span>`).join(" ");
        hp.innerHTML = stats[0].base_stat;
        attack.innerHTML = stats[1].base_stat;
        defence.innerHTML = stats[2].base_stat;
        specialAttack.innerHTML = stats[3].base_stat;
        speacialDefence.innerHTML = stats[4].base_stat;
        speed.innerHTML = stats[5].base_stat;
    }
    catch (err) {
        alert("Pokémon not found");
    }
}

searchButton.addEventListener("click", searchPokedex);
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchPokedex();
    }
});