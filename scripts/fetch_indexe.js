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

// function loadingSpinner() {
//     const contentMainCard = document.getElementById("content"); // Hauptinhalt holen
//     contentMainCard.innerHTML = `<div class="loadingSpinner"></div>`; // Ladeanimation einfügen
//     if (fetchPokemonMainApi) { // Wenn die API geladen wird
//         contentMainCard.innerHTML = `<div class="loadingSpinner"><div id="loading" class="pokeBallContainer">
//             <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//                 <!-- Obere Hälfte -->
//                 <circle cx="50" cy="50" r="40" fill="red" />
//                 <!-- Untere Hälfte -->
//                 <path d="M 10 50 a 40 40 0 0 0 80 0" fill="white" />
//                 <!-- Schwarzer Ring -->
//                 <circle cx="50" cy="50" r="8" fill="white" />
//                 <circle cx="50" cy="50" r="12" fill="black" />
//                 <circle cx="50" cy="50" r="6" fill="white" />
//             </svg>
//         </div></div>`; // Ladeanimation einfügen
//     }
//     else {contentMainCard.innerHTML = ""; // Ladeanimation entfernen    
//     }
// }
