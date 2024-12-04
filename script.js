let pokemonList = []; // Globale Liste für die Details
let offset = 1; // Offset für die API

function init() {
    fetchPokemonMainApi();
}

async function fetchPokemonMainApi() { // Haupt-API aufrufen
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=40`); // Offset dynamisch verwenden
    let data = await response.json(); // Daten abrufen
    console.log(data); // Daten in der Konsole anzeigen
    await fetchPokemonDetailUrl(data); // Detail-API aufrufen
}

async function fetchPokemonDetailUrl(data) { // Detail-API aufrufen
    let contentMainCard = document.getElementById("content"); // Hauptinhalt holen

    for (let i = 0; i < data.results.length; i++) { // Schleife über die Ergebnisse data.results
        const pokemon = data.results[i]; // Einzelnes Pokémon holen
        const detailResponse = await fetch(pokemon.url); // Detail-API aufrufen
        const pokemonDetails = await detailResponse.json(); // Daten abrufen
        console.log(pokemonDetails); // Daten in der Konsole anzeigen

        // Spezies-Informationen abrufen
        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonDetails.id}/`); // Spezies-API aufrufen
        const speciesDetails = await speciesResponse.json(); // Daten abrufen
        const habitat = speciesDetails.habitat?.name || "Unknown"; // Lebensraum Daten holen
        const flavorText = speciesDetails.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || "No description available."; // Daten Beschreibung holen
        const generation = speciesDetails.generation.name; // Daten Generation holen
        console.log(speciesDetails); // Daten in der Konsole anzeigen

        // Spezies-Details in die Pokémon-Daten integrieren
        pokemonDetails.speciesData = { habitat, flavorText, generation }; // Spezies-Daten in die Pokémon-Daten integrieren
        pokemonList.push(pokemonDetails); // Pokémon-Daten in die Liste pokemonList einfügen

        const typeName = pokemonDetails.types[0]?.type?.name; // Typ des Pokémons anhand des ersten Typs und des Namens bestimmen
        const typeIcon = getTypeIcon(typeName); // Icon des Typs anhand des Namens bestimmen
        const typeColor = getTypeColor(typeName); // Farbe des Typs anhand des Namens bestimmen

        contentMainCard.innerHTML += renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor); // Daten in die HTML-Datei einfügen
    }
}

function handleCardClick(pokemonId) { // Detailansicht anzeigen anhand der ID
    const pokemonDetails = pokemonList.find(pokemon => pokemon.id === pokemonId); // Pokemon aus gespeicherter Liste finden anhand der ID
    if (pokemonDetails) { // Wenn das Pokémon gefunden wurde anhand der ID übergebe die Daten an die Detailansicht
        const typeName = pokemonDetails.types[0]?.type?.name; // Typ des Pokémons anhand des ersten Typs und des Namens bestimmen
        const typeIcon = getTypeIcon(typeName); // Icon des Typs anhand des Namens bestimmen
        const typeColor = getTypeColor(typeName); // Farbe des Typs anhand des Namens bestimmen
        renderDetailDataHTML(pokemonDetails, typeName, typeIcon, typeColor); // Detailansicht rendern
    }
}

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

function showMore() {
    offset += 20; // Offset um 20 erhöhen
    fetchPokemonMainApi(); // API erneut aufrufen
}
