function searchPokemon() {
    let searchValue = document.getElementById("seachPokemon").value.trim().toLowerCase(); // Suchwert holen und formatieren
    
    if (searchValue.length < 1) { // Abbrechen, wenn kein Wert eingegeben wurde
        return; // Abbrechen, wenn weniger als 3 Zeichen eingegeben wurden
    }

    // Liste der Pokémon filtern anhand des Namens
    let filteredPokemonList = pokemonList.filter(pokemon => // Liste der Pokémon filtern anhand des Namens
        pokemon.name.toLowerCase().includes(searchValue)  // Filtern anhand des Namens
    );

    let contentMainCard = document.getElementById("content"); // Hauptinhalt holen
    contentMainCard.innerHTML = ''; // Inhalt zurücksetzen

    // Ergebnisse in die HTML-Datei einfügen
    for (let i = 0; i < filteredPokemonList.length; i++) { // Schleife über die Ergebnisse data.results
        let pokemonDetails = filteredPokemonList[i]; // Einzelnes Pokémon holen
        let typeName = pokemonDetails.types[0]?.type?.name || 'unknown'; // Typ des Pokémons anhand des ersten Typs und des Namens bestimmen
        let typeIcon = getTypeIcon(typeName); // Icon des Typs anhand des Namens bestimmen
        let typeColor = getTypeColor(typeName); // Farbe des Typs anhand des Namens bestimmen
        contentMainCard.innerHTML += renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor); // Daten in die HTML-Datei einfügen
    }

    if (filteredPokemonList.length === 0) { // Wenn kein Pokémon gefunden wurde
        contentMainCard.innerHTML = `<p>No Pokémon found.</p>`; //Text es wurde kein Pokémon gefunden
    }  
}