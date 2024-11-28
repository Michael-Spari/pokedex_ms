
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

    for (let i = 0; i < data.results.length; i++) {
        let pokemon = data.results[i]; // Zugriff auf das Pokémon-Objekt über den Index
        let detailResponse = await fetch(pokemon.url); // Detail-API aufrufen
        let pokemonDetails = await detailResponse.json(); // Detail-Daten abrufen
        console.log(pokemonDetails);

        // Pokémon-Typ und entsprechendes Icon abrufen
        let typeName = pokemonDetails.types[0].type.name;
        let typeIconPath = getTypeIcon(typeName);

        // Pokémon-Daten in HTML hinzufügen
        contentElement.innerHTML += `
            <div class="main">
                <div>${pokemonDetails.name}</div>
                <div><img class="mainImage" src="${pokemonDetails.sprites.other["official-artwork"].front_default}" alt="${pokemonDetails.name}"></div>
                <div>
                    <img class="typeIcon" src="${typeIconPath}" alt="${typeName} Icon">
                    <span>${typeName}</span>
                </div>
            </div>`;
    }
}

function getTypeIcon(typeName) {
    const typeIcons = {
        grass: 'assets/icons/pokedex_icons/grass.png',
        fire: 'assets/icons/pokedex_icons/fire.png',
        water: 'assets/icons/pokedex_icons/water.png',
        bug: 'assets/icons/pokedex_icons/bug.png',
        normal: 'assets/icons/pokedex_icons/normal.png',
        poison: 'assets/icons/pokedex_icons/poison.png',
        electric: 'assets/icons/pokedex_icons/electric.png',
        ground: 'assets/icons/pokedex_icons/ground.png',
        fairy: 'assets/icons/pokedex_icons/fairy.png',
        fighting: 'assets/icons/pokedex_icons/fighting.png',
        psychic: 'assets/icons/pokedex_icons/psychic.png',
        rock: 'assets/icons/pokedex_icons/rock.png',
        steel: 'assets/icons/pokedex_icons/steel.png',
        ice: 'assets/icons/pokedex_icons/ice.png',
        ghost: 'assets/icons/pokedex_icons/ghost.png',
        dragon: 'assets/icons/pokedex_icons/dragon.png',
        flying: 'assets/icons/pokedex_icons/flying.png',
        dark: 'assets/icons/pokedex_icons/dark.png',
    };

    return typeIcons[typeName];
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