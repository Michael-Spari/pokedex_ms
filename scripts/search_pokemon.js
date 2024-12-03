function searchPokemon() {
    let searchValue = document.getElementById("seachPokemon").value.trim().toLowerCase(); // Suchwert holen und formatieren
    
    if (searchValue.length < 1) {
        return; // Abbrechen, wenn weniger als 3 Zeichen eingegeben wurden
    }

    // Liste der Pokémon filtern anhand des Namens
    let filteredPokemonList = pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchValue)
    );

    let contentMainCard = document.getElementById("content");
    contentMainCard.innerHTML = ''; // Inhalt zurücksetzen

    // Ergebnisse anzeigen
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