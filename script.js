function init() {
    fetchPokemonMainApi();
}

async function fetchPokemonMainApi() { // Haupt-API aufrufen
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=30'); // API-URL
    let data = await response.json(); // Daten abrufen
    console.log(data); // Daten in der Konsole anzeigen
    fetchPokemonDetailUrl(data); // Detail-API aufrufen
}

let pokemonList = []; // Globale Liste für die Details

async function fetchPokemonDetailUrl(data) {
    let contentMainCard = document.getElementById("content"); // Haupt-Element für die Pokémon
    contentMainCard.innerHTML = '';

    for (let i = 0; i <data.results.length; i++) { // Klassische for-Schleife für die Anzahl der Pokémon
        let pokemon = data.results[i]; // Pokémon-Daten aus der Liste holen und speichern
        let detailResponse = await fetch(pokemon.url); // API für Details aufrufen anhand der URL
        let pokemonDetails = await detailResponse.json(); // JSON-Daten abrufen und speichern
        pokemonList.push(pokemonDetails); // Pokémon-Daten in globale Liste speichern
        console.log(pokemonDetails); // Daten in der Konsole anzeigen

        let typeName = pokemonDetails.types[0].type.name; // Pokémon-Typ bestimmen
        let typeIcon = getTypeIcon(typeName); // Typ-Icon abrufen
        let typeColor = getTypeColor(typeName); // Typ-Farbe abrufen

        // HTML-Inhalt für das Pokémon generieren und einfügen
        contentMainCard.innerHTML += renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor); // HTML-Inhalt einfügen
    }
}

function handleCardClick(pokemonId) { // Detailansicht anzeigen anhand der ID
    const pokemonDetails = pokemonList.find(pokemon => pokemon.id === pokemonId); // Pokemon aus gespeicherter Liste finden anhand der ID
    if (pokemonDetails) { // Wenn das Pokémon gefunden wurde anhand der ID übergebe die Daten an die Detailansicht
        const typeName = pokemonDetails.types[0].type.name; // Typ des Pokémons anhand des ersten Typs und des Namens bestimmen
        const typeIcon = getTypeIcon(typeName); // Icon des Typs anhand des Namens bestimmen
        const typeColor = getTypeColor(typeName); // Farbe des Typs anhand des Namens bestimmen
        renderDetailDataHTML(pokemonDetails, typeName, typeIcon, typeColor); // Detailansicht rendern
    }
}



















// async function fetchDataJsonBeans() {
//     try {
//         let response = await fetch('https://jellybellywikiapi.onrender.com/api/Beans');
//         let responseAsJson = await response.json();

//         let element = '';
//         for (let i = 0; i < responseAsJson.items.length; i++) {
//             element = responseAsJson.items[i];
//             // console.log(element);
//             document.getElementById('content').innerHTML +=   `<div>
//                                                                         <table>
//                                                                             <tr>
//                                                                                 <td>
//                                                                                     Nr ${element.beanId}: ${element.flavorName}
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </div>`;
//         }
//     } catch (error) {
//         console.error("Fehler beim Abrufen der Daten:", error);
//         document.getElementById('content').innerHTML = `Fehler: ${error.message}`;
//     }
// }