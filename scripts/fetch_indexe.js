async function fetchPokemonMainApi() {
    showLoadingSpinner(); // Spinner einblenden
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=40`);
        let data = await response.json();
        console.log(data); // Daten in der Konsole anzeigen
        await fetchPokemonDetailUrl(data);
    } catch (error) {
        console.error("Fehler beim Laden der API:", error);
    } finally {
        hideLoadingSpinner(); // Spinner ausblenden
    }
}

async function fetchPokemonDetailUrl(data) {
    let contentMainCard = document.getElementById("content"); // Hauptinhalt holen
    const originalContent = contentMainCard.innerHTML; // Original-Inhalt sichern
    contentMainCard.style.display = "none"; // Inhalt verstecken während des Ladens

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

    contentMainCard.style.display = "flex"; // Inhalt wieder sichtbar machen
}

function showLoadingSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) {
        spinner.style.display = "flex"; // Bereits vorhandenen Spinner anzeigen
    } else {
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
}

function hideLoadingSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) {
        spinner.style.display = "none"; // Spinner ausblenden
    }
}



