function showLastPokemon(pokemonId) {
    const index = pokemonList.findIndex(pokemon => pokemon.id === pokemonId);
    if (index > 0) {
        handleCardClick(pokemonList[index - 1].id);
    } else {
        alert("This is the first Pokémon in the list.");
    }
}

function showNextPokemon(pokemonId) {
    const index = pokemonList.findIndex(pokemon => pokemon.id === pokemonId);
    if (index < pokemonList.length - 1) {
        handleCardClick(pokemonList[index + 1].id);
    } else {
        alert("This is the last Pokémon in the list.");
    }
}

function showSlots(pokemonId) {
    const slots = pokemonList.find(pokemon => pokemon.id === pokemonId).moves;
    const slotsList = slots.map(slot => slot.move.name);
    document.getElementById("slots").innerHTML = `
        <div class="slotsFrame"><b>Slots:</b> ${slotsList.join(", ")}</div>`;
}

function showMoves(pokemonId) {
    const moves = pokemonList.find(pokemon => pokemon.id === pokemonId).moves;
    const movesList = moves.map(move => move.move.name);
    document.getElementById("slots").innerHTML = `
        <div class="slotsFrame"><b>Moves:</b> ${movesList.join(", ")}</div>`;
}

function showAbilities(pokemonId) {
    const abilities = pokemonList.find(pokemon => pokemon.id === pokemonId).abilities;
    const abilitiesList = abilities.map(ability => ability.ability.name);
    document.getElementById("slots").innerHTML = `
        <div class="slotsFrame"><b>Abilities:</b> ${abilitiesList.join(", ")}</div>`;
}

function closeDetailCard() {
    document.getElementById("detailCard").classList.toggle("detailWinOpen");
    document.getElementById("darken").classList.toggle("darkenBackgroundOpen");
}
