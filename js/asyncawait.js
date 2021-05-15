// function greet(){
//     return 'HELLO!!!';
// }

//ASYNC KEYWORD
// An Async function is just a short form of returning a promise

// async function greet(){
//     return 'HELLO!!!';
// }

// greet().then((value) => console.log(value));

// THE   AWAIT KEYWORD     

// Without the Await Keyword
// function getCharacters(){
//     return axios.get('https://anapioficeandfire.com/api/characters');
// }

// getCharacters().then(({data}) => display(data));

// With The Await Keyword

// async function getCharactersAsync(){

//     const {data} = await axios.get('https://anapioficeandfire.com/api/characters');
//     console.log(data);

// }
// getCharactersAsync();

// // Error Handling in Async/Await Functions

// First Method of Error Handling
// async function getCharactersAsync(){

//     const {data} = await axios.get('https://anapioficeandfire.com/api/character');
//     console.log(data);

// }
// getCharactersAsync().catch((err) =>{
//     display('ERROR WAS CAUGHT');
//     display(err);
// });

// ALTERNATIVE WAY TO HANDLE ERROR
// async function getCharactersAsync(){
//     try {
//         const {data} = await axios.get('https://anapioficeandfire.com/api/character');
//         console.log(data);
//     } catch (error) {
//         display(error);
//     }

// }
// getCharactersAsync();

// PARALLEL AND SEQUENTIAL ASYNC/AWAIT

// SEQUENCE --- requst is completed one at a time
async function get3Pokemon(){
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
    display(poke1);
    display(poke2);
    display(poke3);
}

// get3Pokemon();

// PARALLEL

async function get3PokemonInParallel(){
    const prom1 =  axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 =  axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 =  axios.get('https://pokeapi.co/api/v2/pokemon/3');

   const poke1 = await prom1;
   const poke2 = await prom2;
   const poke3 = await prom3;
    
    display(poke1);
    display(poke2);
    display(poke3);
}

get3PokemonInParallel();

// A Cleaner Syntax


async function get3PokemonInParallelClean(){
    const prom1 =  axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 =  axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 =  axios.get('https://pokeapi.co/api/v2/pokemon/3');

    const results = await Promise.all([prom1,prom2,prom3]);
    display(results);
}

get3PokemonInParallelClean();









function display(input){
    console.log(input);
}