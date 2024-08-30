pokemonList();

function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        data.results.forEach(pokemon => {
            let pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            console.log(pokemonName);
        }); 
        
        fetchPokemonDetails("gengar");
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function fetchPokemonDetails(pokemonName) {
    fetch(https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()})
    .then(response => response.json())
    .then(data => {
        let formattedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

        let types = data.types.map(typeInfo => typeInfo.type.name).join(', ');

        let abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');

        let stats = data.stats.map(statInfo => ${statInfo.stat.name}: ${statInfo.base_stat}).join(', ');

        console.log(\nDetalles de ${formattedName}:);
        console.log(Nombre: ${formattedName});
        console.log(Tipos: ${types});
        console.log(Habilidades: ${abilities});
        console.log(Estadísticas: ${stats});
    })
    .catch(error => {
        console.error('Error:', error);
    });
}