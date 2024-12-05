function searchPokemon() {
    let searchValue = document.getElementById("seachPokemon").value.trim().toLowerCase();
    let contentMainCard = document.getElementById("content");
    contentMainCard.innerHTML = '';
    if (searchValue.length < 1) {
        displayAllPokemon();
        return;
    }
    let filteredPokemonList = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue));
    for (let i = 0; i < filteredPokemonList.length; i++) {
        let pokemonDetails = filteredPokemonList[i];
        let typeName = pokemonDetails.types[0]?.type?.name || 'unknown';
        let typeIcon = getTypeIcon(typeName);
        let typeColor = getTypeColor(typeName);
        contentMainCard.innerHTML += renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor);
    }
    if (filteredPokemonList.length === 0) {
        contentMainCard.innerHTML = `<p>No Pokémon found.</p>`;
    }
}

function displayAllPokemon() {
    let contentMainCard = document.getElementById("content");
    contentMainCard.innerHTML = '';
    for (let i = 0; i < pokemonList.length; i++) {
        let pokemonDetails = pokemonList[i];
        let typeName = pokemonDetails.types[0]?.type?.name || 'unknown';
        let typeIcon = getTypeIcon(typeName);
        let typeColor = getTypeColor(typeName);
        contentMainCard.innerHTML += renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor);
    }
}
