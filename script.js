
async function fetchDataJson() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=200');
    let responseAsJson = await response.json();
    console.log(responseAsJson);
    renderDataWithImages(responseAsJson);
}

async function fetchAndRenderPokemonDetails(url) {
    let response = await fetch(url);
    let pokemonDetails = await response.json();
    console.log(pokemonDetails);

    return `<div class="main">
        <table>
            <tr>
                <td>
                    Name: ${pokemonDetails.name}
                </td>
            </tr>
            <tr>
                <td>
                   Höhe: ${pokemonDetails.height}
                </td>
            </tr>
            <tr>
                <td>
                   Gewicht: ${pokemonDetails.weight}
                </td>
            </tr>
            <tr>
                <td>
                   <img src="${pokemonDetails.sprites.front_default}" alt="${pokemonDetails.name}">
                </td>
            </tr>
            <!-- Füge weitere erwähnenswerte Datenfelder hinzu -->
        </table>
    </div>`;
}

async function renderDataWithImages(responseAsJson) {
    let contentElement = document.getElementById("content");
    contentElement.innerHTML = '';  // Leere zuerst den Inhalt

    for (let i = 0; i < responseAsJson.results.length; i++) {
        let element = responseAsJson.results[i];
        let pokemonHtml = await fetchAndRenderPokemonDetails(element.url);
        contentElement.innerHTML += pokemonHtml;
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