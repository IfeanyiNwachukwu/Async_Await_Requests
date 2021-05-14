// FETCH API

// fetch('http://universities.hipolabs.com/search?country=United+Kingdom')

// const prom = fetch('https://anapioficeandfire.com/api/characters/583');

// prom
// .then((res) =>{
//     if(res.status !== 200){
//         display('problem!', res.status);
//         return;
//     }
//     res.json().then((data) => display(data));
// })
// .catch(function(err){
//     display('Fetch Error',err);
// })

// The fetch takes one argument which is the url of the API

// fetch('https://anapioficeandfire.com/api/characters/583')
// .then((response) => {
//     response.json()
//     .then((data) =>{
//         for(let alias of data.aliases){
//             display(alias);
//         }
//     })
// })


// fetch('https://anapioficeandfire.com/api/characters/583')
// .then((response) =>{
//     if(response.status !== 200){
//         display('something went wrong with your request',response.status);
//         return
//     }
//     return response.json();
// })
// .then((data) => {
//      console.log(data);
     
//     // const nickNames = data.aliases;
//     // nickNames.forEach(nickName => display(nickName));
// })
// .catch((err) =>{
//     console.log('SOMETHING WENT WRONG WITH FETCH');
//     console.log(err);
// });

// fetch('https://anapioficeandfire.com/api/characters/58y')
// .then((response) =>{
//     if(response.ok){
//         return response.json();
//     }
//     else{
//          throw new Error(`Status Error : ${response.status}`) //(`Status Error : ${response.status}`);  //NOTE : We could choose to pass an argument to an error or not 
//     }
// })
// .then((data) => {
//      console.log(data);
     
//     // const nickNames = data.aliases;
//     // nickNames.forEach(nickName => display(nickName));
// })
// .catch((err) =>{
//     console.log('SOMETHING WENT WRONG WITH FETCH');
//     console.error(err);
//     // console.log(err.prototype.message);
// })

// FETCH CHAINING
// const checkStatusAndParse = (response) =>{
//     if(!response.ok){
//         throw (new Error(`status : ${response.status}`))
//     }
//     else{
//         throw (new Error(`status : ${response.status}`))
//     }
// }
// fetch('https://anapioficeandfire.com/api/characters')
// .then((response) =>{
//     checkStatusAndParse(response);
// })
// .then((data) => {
//     display(data);
//     if(data){
//         const bookUrl = data[0].books
//         return bookUrl
//     }
//     else{
//         throw (new Error(`status Error : ${response.status}`));
//     }
// })
// .then((bookUrl) => {
//     return fetch(bookUrl);
// })
// .then((result) =>{
//     if(result.ok){
//         return result.json();
//     }
//     else{
//         throw (new Error(`status Error : ${response.status}`));
//     }
// })
// .then((responseData) =>{
//     display(responseData);
// })
// .catch((err) =>{
//     display('SOMETHING WENT WRONG WITH FETCHING THE RWQUESTED DATA');
//     console.log(err.name);
//     console.log(err.message);
// })

// AXIOS
// one of the advantages of axios is that we do not have to include
// response.json()
//  axios.get('https://anapioficeandfire.com/api/character')
//  .then((response) =>{
//      console.log(response);
//  })
//  .catch((err) => console.log(err));

 axios.get('https://anapioficeandfire.com/api/characters')
 .then(({data}) =>{
    display(data[0].books);
     return axios.get(data[0].books);   // aHere Url of the book has been passed already
 })
 .then((data) =>{
     console.log(data);
 })

//  axios.get('https://anapioficeandfire.com/api/characters')
//  .then((response) => console.log(response))

 
 





















function display(input){
    console.log(input);
}