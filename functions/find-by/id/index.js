const id = (pokeData, id) => {
    if (pokeData.find(pokemon => pokemon.id === id)) {
        return pokeData.find(pokemon => pokemon.id === id);
    } else { return {};}
}

module.exports = id;
