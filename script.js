function init() {
    fetchPokemonMainApi();
}

async function fetchPokemonMainApi() { // Haupt-API aufrufen
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=200'); // API-URL
    let data = await response.json(); // Daten abrufen
    console.log(data); // Daten in der Konsole anzeigen
    fetchPokemonDetailUrl(data); // Detail-API aufrufen
}

async function fetchPokemonDetailUrl(data) { // Detail-API aufrufen
    let contentMainCard = document.getElementById("content"); // Element für das Rendern auswählen
    contentMainCard.innerHTML = ''; // Vorherigen Inhalt leeren

    for (let i = 0; i < data.results.length; i++) { // Schleife für die Anzahl der Pokémon
        let pokemon = data.results[i]; // Zugriff auf das Pokémon-Objekt über den Index
        let detailResponse = await fetch(pokemon.url); // Detail-API aufrufen
        let pokemonDetails = await detailResponse.json(); // Detail-Daten abrufen
        console.log(pokemonDetails); // Detail-Daten in der Konsole anzeigen

        // Pokémon-Typ und entsprechendes Icon und Farben abrufen
        let typeName = pokemonDetails.types[0].type.name; // Zugriff auf den Typ des Pokémon
        let typeIcon = getTypeIcon(typeName); // Icon des Typs
        let typeColor = getTypeColor(typeName); // Hintergrundfarbe des Typs
        contentMainCard.innerHTML += renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor); // Pokémon-Daten in HTML hinzufügen
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