async function fetchPokemonMainApi() {
    showLoadingSpinner();
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=40`);
        let data = await response.json();
        await fetchPokemonDetailUrl(data);
    } catch (error) {
        console.error("Fehler beim Laden der API:", error);
    } finally {
        hideLoadingSpinner();
    }
}

async function fetchPokemonDetailUrl(data) {
    let contentMainCard = document.getElementById("content");
    contentMainCard.style.display = "none";
    for (let i = 0; i < data.results.length; i++) {
        const pokemon = data.results[i];
        const detailResponse = await fetch(pokemon.url);
        const pokemonDetails = await detailResponse.json();
        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonDetails.id}/`);
        const speciesDetails = await speciesResponse.json();
        const habitat = speciesDetails.habitat?.name || "Unknown";
        const flavorText = speciesDetails.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || "No description available.";
        const generation = speciesDetails.generation.name;
        pokemonDetails.speciesData = { habitat, flavorText, generation };
        pokemonList.push(pokemonDetails);
        const typeName = pokemonDetails.types[0]?.type?.name;
        const typeIcon = getTypeIcon(typeName);
        const typeColor = getTypeColor(typeName);
        contentMainCard.innerHTML += renderDataHtml(pokemonDetails, typeName, typeIcon, typeColor);
    }
    contentMainCard.style.display = "flex";
}




