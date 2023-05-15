const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
let offset = 0
let limit = 5
function pokemonHtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <h2 class="title">Abilities:</h2>
    <div class="details">
      <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
      </ol>
      <p>${pokemon.abilities.join(' <strong>and</strong> ')}</p>
      <img
        src="${pokemon.img}"alt="${pokemon.name}"/>
    </div>
  </li>
  `
}

function loadPokemon(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(pokemonHtml).join('')
})
}

loadPokemon(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  loadPokemon(offset, limit)
})
