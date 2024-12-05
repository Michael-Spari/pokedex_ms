let pokemonList = []; // Globale Liste für die Details
let offset = 0; // Offset für die API

function init() {
    fetchPokemonMainApi();
    checkWindowSize(); // Fenstergröße überprüfen
    
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

function showMore() {
    offset += 20; // Offset um 20 erhöhen
    fetchPokemonMainApi(); // API erneut aufrufen
}