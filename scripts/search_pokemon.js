function searchPokemon() {
    let searchValue = document.getElementById("seachPokemon").value.trim().toLowerCase(); // Suchwert holen und formatieren
    
    let contentMainCard = document.getElementById("content"); // Hauptinhalt holen
    contentMainCard.innerHTML = ''; // Inhalt zurücksetzen

    if (searchValue.length < 1) { // Abbrechen, wenn kein Wert eingegeben wurde
        displayAllPokemon(); // Alle Pokémon anzeigen
        return;
    }

    // Liste der Pokémon filtern anhand des Namens
    let filteredPokemonList = pokemonList.filter(pokemon => // Liste der Pokémon filtern anhand des Namens
        pokemon.name.toLowerCase().includes(searchValue)  // Filtern anhand des Namens
    );

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

function displayAllPokemon() {
    let contentMainCard = document.getElementById("content"); // Hauptinhalt holen
    contentMainCard.innerHTML = ''; // Inhalt zurücksetzen

    // Alle Pokémon in die HTML-Datei einfügen
    for (let i = 0; i < pokemonList.length; i++) { // Schleife über alle Pokémon
        let pokemonDetails = pokemonList[i]; // Einzelnes Pokémon holen
        let typeName = pokemonDetails.types[0]?.type?.name || 'unknown'; // Typ des Pokémons anhand des ersten Typs und des Namens bestimmen
        let typeIcon = getTypeIcon(typeName); // Icon des Typs anhand des Namens bestimmen
        let typeColor = getTypeColor(typeName); // Farbe des Typs anhand des Namens bestimmen
        contentMainCard.innerHTML += renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor); // Daten in die HTML-Datei einfügen
    }
}