function renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor) {
    return `
        <div class="mainCards" 
             style="background-color: ${typeColor}" 
             onclick="handleCardClick(${pokemonDetails.id})">
            <div>${pokemonDetails.name}</div>
            <div>
                <img class="mainCardImage" 
                     src="${pokemonDetails.sprites.other["official-artwork"].front_default}" 
                     alt="${pokemonDetails.name}">
            </div>
            <div>
                <img class="typeIcon" src="${typeIcon}">
                <span>${typeName}</span>
            </div>
        </div>`;
}

function renderDetailDataHTML(pokemonDetails, typeName, typeIcon, typeColor) {
    let contentDetailCard = document.getElementById("detailCard");
    contentDetailCard.innerHTML = `
        <div class="innerDetailCards" style="background-color: ${typeColor}">
            <div>${pokemonDetails.name}</div>
            <div>
                <img class="detailCardImage" 
                     src="${pokemonDetails.sprites.other["official-artwork"].front_default}" 
                     alt="${pokemonDetails.name}">
            </div>
            <div>
                <img class="typeIcon" src="${typeIcon}">
                <span>${typeName}</span>
            </div>
            <div>
                <span>Height: ${pokemonDetails.height}</span>
                <span>Weight: ${pokemonDetails.weight}</span>
            </div>
        </div>`;
}