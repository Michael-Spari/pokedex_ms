function showLastPokemon(pokemonId) {
    const index = pokemonList.findIndex(pokemon => pokemon.id === pokemonId); // Index des Pokémons finden
    if (index > 0) { // Wenn das Pokémon nicht das erste in der Liste ist
        handleCardClick(pokemonList[index - 1].id); // Index des vorherigen Pokémons anzeigen -1
    }
    else {
        alert("This is the first Pokémon in the list."); // Wenn das erste Pokémon in der Liste ist
    }
}

function showNextPokemon(pokemonId) {
    const index = pokemonList.findIndex(pokemon => pokemon.id === pokemonId); // Index des Pokémons finden
    if (index < pokemonList.length - 1) { // Wenn das Pokémon nicht das letzte in der Liste ist
        handleCardClick(pokemonList[index + 1].id); // Index des nächsten Pokémons anzeigen +1
    }
    else {
        alert("This is the last Pokémon in the list."); // Wenn das letzte Pokémon in der Liste ist
    }
}

function showSlots(pokemonId) {
    const slots = pokemonList.find(pokemon => pokemon.id === pokemonId).moves; // Slots des Pokémons finden
    const slotsList = slots.map(slot => slot.move.name); // Slots in eine Liste umwandeln
    document.getElementById("slots").innerHTML = `
        <div class="slotsFrame"><b>Slots:</b> ${slotsList.join(", ")}</div>`; // Slots in die HTML-Datei einfügen
}

function showMoves(pokemonId) {
    const moves = pokemonList.find(pokemon => pokemon.id === pokemonId).moves; // Moves des Pokémons finden
    const movesList = moves.map(move => move.move.name); // Moves in eine Liste umwandeln
    document.getElementById("slots").innerHTML = `
        <div class="slotsFrame"><b>Moves:</b> ${movesList.join(", ")}</div>`; // Moves in die HTML-Datei einfügen
}

function showAbilities(pokemonId) {
    const abilities = pokemonList.find(pokemon => pokemon.id === pokemonId).abilities; // Abilities des Pokémons finden
    const abilitiesList = abilities.map(ability => ability.ability.name); // Abilities in eine Liste umwandeln
    document.getElementById("slots").innerHTML = `
        <div class="slotsFrame"><b>Abilities:</b> ${abilitiesList.join(", ")}</div>`; // Abilities in die HTML-Datei einfügen
}

function closeDetailCard() {
    document.getElementById("detailCard").classList.toggle("detailWinOpen"); // Detailansicht schließen
    document.getElementById("darken").classList.toggle("darkenBackgroundOpen"); // Hintergrund aufhellen
}