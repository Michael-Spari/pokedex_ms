function renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor) { // Daten in die HTML-Datei einfügen
    return `
        <div class="mainCards" 
             style="background-color: ${typeColor}" 
             onclick="handleCardClick(${pokemonDetails.id})">
            <div class="mainCardsIconText">${pokemonDetails.name}</div>
            <div>
                <img class="mainCardImage" 
                     src="${pokemonDetails.sprites.other["official-artwork"].front_default}" 
                     alt="${pokemonDetails.name}">
            </div>
            <div>
                <div class="centerIcons">
                    <img class="typeIcon" src="${typeIcon}">
                    <span>${typeName}</span>
                </div>
                <div class="centerIcons">
                    <img class="typeIcon" src="${getTypeIcon(pokemonDetails.types[1]?.type?.name)}">
                    <span>${pokemonDetails.types[1]?.type?.name || ''}</span>
                </div>
            </div>
        </div>`;
}

function renderDetailDataHTML(pokemonDetails, typeName, typeIcon, typeColor) { // Detailansicht rendern
    document.getElementById("detailCard").classList.toggle("detailWinOpen"); // Detailansicht öffnen
    document.getElementById("darken").classList.toggle("darkenBackgroundOpen"); // Hintergrund abdunkeln
    const contentDetailCard = document.getElementById("detailCard"); // Detailansicht in die Variable contentDetailCard speichern
    const { habitat, flavorText, generation } = pokemonDetails.speciesData; // Daten aus gespeicherter Liste holen
    contentDetailCard.innerHTML = `
    <div class="detailCards-content">
        <div class="innerDetailCards" style="background-color: ${typeColor}">
            <div class="mainCardsIconText">${pokemonDetails.name}</div>
            
                <div>
                    <img class="detailCardImage" 
                         src="${pokemonDetails.sprites.other["official-artwork"].front_default}" 
                         alt="${pokemonDetails.name}">
                </div>
                <div class="iconsFrame">
                    <div class="centerIcons">  
                        <img class="typeIcon" src="${typeIcon}">
                        <span>${typeName}</span>
                    </div>
                    <div class="centerIcons">
                        <img class="typeIcon" src="${getTypeIcon(pokemonDetails.types[1]?.type?.name)}">
                        <span>${pokemonDetails.types[1]?.type?.name || ''}</span>
                    </div>
                </div>
                    <button onclick="showLastPokemon(${pokemonDetails.id})"><img  class="leftArrow" src="./assets/img/lastPokemon.png"></button>
                    <button class="rightArrow" onclick="showNextPokemon(${pokemonDetails.id})"><img  class="leftArrow" src="./assets/img/nextPokemon.png"></button>
                <div class="detailButtonFrame">
                    <button onclick="showSlots(${pokemonDetails.id}); event.stopPropagation();">Slots</button>
                    <div><button onclick="showMoves(${pokemonDetails.id}); event.stopPropagation();">Moves</button></div>
                    <div><button onclick="showAbilities(${pokemonDetails.id}); event.stopPropagation();">Abilities</button></div>
                    <div><button onclick="closeDetailCard(); event.stopPropagation();">X</button></div>
                </div>
                    <div class="speciesData">
                        <span><b>Height:</b> ${pokemonDetails.height} m</span>
                        <span><b>Weight:</b> ${pokemonDetails.weight} kg</span>
                        <span><b>Habitat:</b> ${habitat}</span>
                        <span><b>Generation:</b> ${generation}</span>
                        <span><b>Flavor Text:</b> ${flavorText}</span>
                    </div>
                <div class="speciesData" id="slots"><img class="loadingGif" src="./assets/img/loading.gif"></div>
            </div>
        </div>`;
}

function showSlots(pokemonId) {
    const slots = pokemonList.find(pokemon => pokemon.id === pokemonId).moves; // Slots des Pokémons finden
    const slotsList = slots.map(slot => slot.move.name); // Slots in eine Liste umwandeln
    document.getElementById("slots").innerHTML = `
        <div class="slotsFrame"><b>Slots:</b> ${slotsList.join(", ")}</div>`; // Slots in die HTML-Datei einfügen
}

function showMoves(pokemonId) {
    const moves = pokemonList.find(pokemon => pokemon.id === pokemonId).moves; // Moves des Pokémons finden
    const movesList = moves.map(move => move.move.name); // Moves in eine Liste umwandeln
    document.getElementById("slots").innerHTML = `
        <div class="slotsFrame"><b>Moves:</b> ${movesList.join(", ")}</div>`; // Moves in die HTML-Datei einfügen
}

function showAbilities(pokemonId) {
    const abilities = pokemonList.find(pokemon => pokemon.id === pokemonId).abilities; // Abilities des Pokémons finden
    const abilitiesList = abilities.map(ability => ability.ability.name); // Abilities in eine Liste umwandeln
    document.getElementById("slots").innerHTML = `
        <div class="slotsFrame"><b>Abilities:</b> ${abilitiesList.join(", ")}</div>`; // Abilities in die HTML-Datei einfügen
}

function closeDetailCard() {
    document.getElementById("detailCard").classList.toggle("detailWinOpen"); // Detailansicht schließen
    document.getElementById("darken").classList.toggle("darkenBackgroundOpen"); // Hintergrund aufhellen
}