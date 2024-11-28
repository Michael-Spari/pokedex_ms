
async function fetchAndRenderPokemon() {
    // Abrufen der Haupt-API
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=200');
    let data = await response.json();
    console.log(data);
    renderData(data);
}

    // Element für das Rendern auswählen
async function renderData(data) {
    let contentElement = document.getElementById("content");
    contentElement.innerHTML = ''; // Vorherigen Inhalt leeren

    // Klassische for-Schleife mit Index
    for (let i = 0; i < data.results.length; i++) {
        let pokemon = data.results[i]; // Zugriff auf das Pokémon-Objekt über den Index
        let detailResponse = await fetch(pokemon.url); // Detail-API aufrufen
        let pokemonDetails = await detailResponse.json(); // Detail-Daten abrufen
        // console.log(pokemonDetails);

        // Pokémon-Daten in HTML hinzufügen
        contentElement.innerHTML += `
            <div class="main">
                <table>
                    <tr>
                        <td>Name: ${pokemonDetails.name}</td>
                    </tr>
                    <tr>
                        <td>Höhe: ${pokemonDetails.height}</td>
                    </tr>
                    <tr>
                        <td>Gewicht: ${pokemonDetails.weight}</td>
                    </tr>
                    <tr>
                        <td>
                            <img src="${pokemonDetails.sprites.front_default}" alt="${pokemonDetails.name}">
                        </td>
                    </tr>
                </table>
            </div>
        `;
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