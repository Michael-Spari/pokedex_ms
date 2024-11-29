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
    
    return typeIcons[typeName]; // Rückgabe des Icons
}