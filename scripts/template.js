function renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor) {
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

function renderDetailDataHTML(pokemonDetails, typeName, typeIcon, typeColor) {
    document.getElementById("detailCard").classList.toggle("detailWinOpen");
    document.getElementById("darken").classList.toggle("darkenBackgroundOpen");
    const contentDetailCard = document.getElementById("detailCard");
    const { habitat, flavorText, generation } = pokemonDetails.speciesData;
    contentDetailCard.innerHTML = `
    <div class="detailCards-content" onclick="event.stopPropagation();">
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
                    <button onclick="showStats(${pokemonDetails.id}); event.stopPropagation();">Stats</button>
                    <button onclick="showMoves(${pokemonDetails.id}); event.stopPropagation();">Moves</button>
                    <button onclick="showAbilities(${pokemonDetails.id}); event.stopPropagation();">Abilities</button>
                    <button onclick="closeDetailCard(); event.stopPropagation();">X</button>
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

function renderLoadingSpinner() {
    const contentMainCard = document.getElementById("content");
    const spinnerElement = document.createElement("div");
    spinnerElement.id = "loadingSpinner";
    spinnerElement.innerHTML = `
        <div class="loadingSpinner">
            <div id="loading" class="pokeBallContainer">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="red" />
                    <path d="M 10 50 a 40 40 0 0 0 80 0" fill="white" />
                    <circle cx="50" cy="50" r="8" fill="white" />
                    <circle cx="50" cy="50" r="12" fill="black" />
                    <circle cx="50" cy="50" r="6" fill="white" />
                </svg>
            </div>
        </div>`;
    contentMainCard.insertAdjacentElement("beforebegin", spinnerElement);
}