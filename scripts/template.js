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
    const contentDetailCard = document.getElementById("detailCard"); // Detailansicht holen
    const { habitat, flavorText, generation } = pokemonDetails.speciesData; // Daten aus gespeicherter Liste holen
    contentDetailCard.innerHTML = `
        <div class="innerDetailCards" style="background-color: ${typeColor}">
            <div class="mainCardsIconText">${pokemonDetails.name}</div>
            <div>
                <img class="detailCardImage" 
                     src="${pokemonDetails.sprites.other["official-artwork"].front_default}" 
                     alt="${pokemonDetails.name}">
            </div>
                <div class="centerIcons">  
                    <img class="typeIcon" src="${typeIcon}">
                    <span>${typeName}</span>
                </div>
                <div class="centerIcons">
                    <img class="typeIcon" src="${getTypeIcon(pokemonDetails.types[1]?.type?.name)}">
                    <span>${pokemonDetails.types[1]?.type?.name || ''}</span>
                </div><br>
            <div class="speciesData">
                <span><b>Height:</b> ${pokemonDetails.height} m</span>
                <span><b>Weight:</b> ${pokemonDetails.weight} kg</span>
                <span><b>Habitat:</b> ${habitat}</span>
                <span><b>Generation:</b> ${generation}</span>
                <span><b>Flavor Text:</b> ${flavorText}</span>
            </div>
        </div>`;
}
