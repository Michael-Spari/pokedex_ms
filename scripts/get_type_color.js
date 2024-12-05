function getTypeColor(typeName) {
    const typeColors = {
        grass: '#78C850',
        fire: '#F08030',
        water: '#6890F0',
        bug: '#A8B820',
        normal: '#A8A878',
        poison: '#A040A0',
        electric: '#F8D030',
        ground: '#E0C068',
        fairy: '#EE99AC',
        fighting: '#C03028',
        psychic: '#F85888',
        rock: '#B8A038',
        steel: '#B8B8D0',
        ice: '#98D8D8',
        ghost: '#705898',
        dragon: '#7038F8',
        flying: '#A890F0',
        dark: '#705848',
    };   
    return typeColors[typeName] || '';
}