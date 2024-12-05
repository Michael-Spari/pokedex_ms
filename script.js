let pokemonList = [];
let offset = 0;

function init() {
    fetchPokemonMainApi();
    checkWindowSize();   
}

function handleCardClick(pokemonId) {
    const pokemonDetails = pokemonList.find(pokemon => pokemon.id === pokemonId);
    if (pokemonDetails) {
        const typeName = pokemonDetails.types[0]?.type?.name;
        const typeIcon = getTypeIcon(typeName);
        const typeColor = getTypeColor(typeName);
        renderDetailDataHTML(pokemonDetails, typeName, typeIcon, typeColor);
    }
}

function showMore() {
    offset += 20;
    fetchPokemonMainApi();
}