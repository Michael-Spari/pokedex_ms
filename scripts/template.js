function renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor){
    return`
        <div class="mainCards" style="background-color: ${typeColor}">
            <div>${pokemonDetails.name}</div>
                <div><img class="mainCardImage" 
                    src="${pokemonDetails.sprites.other["official-artwork"].front_default}" 
                    alt="${pokemonDetails.name}">
                </div>
            <div>
                <img class="typeIcon" src="${typeIcon}">
                <span>${typeName}</span>
            </div>
        </div>`;
}