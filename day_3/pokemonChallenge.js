let pokemonCatcher = async (pokemonName) => {
    try{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        

        // create a safety net incase of error status
        if (!response.ok){
            throw new Error(`Something wrong with API: ${response.status}`);
        }
        // lets get the data here
        let data = await response.json();
        console.log(`========= Pokemon Index ===========`);
        console.log(``);
        // get the name of the pokemon
        console.log(`Pokemon Name: ${data.name}`);
        console.log(`${data.name} weight: ${data.weight}kg?`);

        // lets get all the abilities
        console.log(``);
        console.log('======== ABILITIES ========');
        for (let i = 0; i < data.abilities.length; i++){
            console.log(data.abilities[i].ability.name);
        }


    }catch (error){
        console.log('Pokemon Not Found');
        console.log(error);
    }
};

pokemonCatcher('charizard');

pokemonCatcher('batman');