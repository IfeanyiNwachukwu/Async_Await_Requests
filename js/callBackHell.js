const btn = document.querySelector('button');
// setTimeout(function(){
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(function(){
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(function(){
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(function(){
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(function(){
//                     btn.style.transform = `translateX(500px)`;
//                 },1000);
//             },1000);
            
//         },1000);
//     },1000);
// },1000);


// const moveX = (element,amount,delay,callback,onSuccess,onFailure) =>{

//     const bodyBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const elLeft  = element.getBoundingClientRect().left;
//     if(elRight + amount > bodyBoundary){
//         onFailure();
//     }
//     else{
//         setTimeout(() =>{
//             element.style.transform = `translateX(${amount}px)`;
//             onSuccess();
//         },delay)
//     }
   
// }

// moveX(btn,100,1000, ()=>{
//    moveX(btn,200,1000,() =>{
//        moveX(btn,300,1000,() =>{
//            moveX(btn,400,1000,() =>{
//                moveX(btn,500,1000);
//            })
//        })
//    })

// });

// INTRO TO PROMISES

// const willGetYouADog = new Promise((resolve,reject) =>{
//     const rand = Math.random();
//     if(rand < 0.5){
//         resolve();
//     }
//     else{
//         reject();
//     }
// });

// willGetYouADog.then(() => {
//     console.log('Yay we got a dog')
// }).catch(()=>{
//     console.log('No Dog!')
// })


// const willGetYouADog = new Promise((resolve,reject) =>{
//    setTimeout(()=>{
//        const rand = Math.random();
//        if(rand < 0.5){
//            resolve();
//        }
//        else{
//            reject();
//        }
//    },5000)
// });

// willGetYouADog.then(() => {
//     console.log('Yay we got a dog')
// }).catch(()=>{
//     console.log('No Dog!')
// })

// Functions That Return A Promise --- we can now chain then and catch

// const makeDogPromise = () => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let rand = Math.random();
//             if(rand < 0.5){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         },5000)
//     })
// }

// makeDogPromise().then(()=> console.log('Yay we got a dog'))
// .catch(() => console.log('No Dog!'))

// A PROMISE CAN ALSO RETURN A VALUE
// In the case of an HHTp requestAnimationFrame. If request fails, we
// want to know why and if the request was successful,
// we want to get the data that was returned.
// -- We can pass information in to the resolve or reject calls
// const makeFakeRequest = (url) =>{
//     return new Promise((resolve,reject) =>{
        
//         setTimeout(() =>{
            
//                 const pages = { 
//                     '/users' : [{id:1, username: 'Bilbo'},{id:2,username: 'Esmeralda' }],
//                     '/about' : 'This is the about page'}
//                     const data = pages[url];
//                if(data){
//                 resolve({status:200, data});
//                }
//                else{
//                    reject({status : 404});
//                }
            
//         },1000)
//     })
// }

// makeFakeRequest('/about').then((res) => {
//     console.log(`status code : ${res.status}`);
//     console.log(`data : ${res.data}`);
//     console.log('REQUEST WAS SUCCESSFUL');
// }
//  )
// .catch((res)=> {
//     console.log(res.status);
//     console.log('REQUEST FAILED!');

// })





// const makeFakeRequest = (url) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const pages = {
//                 '/users': [{id:1, 'username': 'Emeka'}, {id:2,'username' : 'obi'},{id:3, 'username': 'Amaka'}],
//                 '/About': 'This is the About Page'
//             }
//             const data = pages[url];
//             if(data){
//                 resolve({status:200,data});
//             }
//             else{
//                 reject({status: 404})
//             }
//         },1000)
//     })
// }

// makeFakeRequest('/users')
// .then((res) => {
//     console.log(`status : ${res.status}`);
//     console.log('data  :', res.data);
//     console.log('REQUEST WAS SUCCESSFUL')
// })
// .catch((res) =>{
//     console.log(res.status);
//     console.log('REQUEST FAILED');
// })


// PROMISE CHAINING

// const fakeRequest = (url) => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             const pages = {
//                 '/users' : [{id:1, username: 'Bilbo'},{id:5, username: 'Esmeralda'}],
//                 '/users/1' : {id:1,username:'Bilbo',upvotes:360,city:'Lisbon',topPostId : 454321},
//                 '/users/5' : {id:5,username:'Esmeralda',upvotes:571,city:'Honolulu'},
//                 '/posts/454321' : {
//                     id:454321,
//                     title : 'The Modern javascript Bootcamp'
//                    },
//                 '/about': 'This is the best javascript course you will ever find'
//             }
//             const data = pages[url];
//             if(data){
//                 resolve({status:200, data })
//             }
//             else{
//                 reject({status:404})
//             }
//         },1000)
//     })
// }

// NOT AN IDEAL WAY
// fakeRequest('/users')
// .then((res) => {
//     const id = res.data[0].id
//     fakeRequest(`/users/${id}`)
//     .then((res) =>{
//         // console.log(res)

//         const postId = res.data.topPostId;
//         fakeRequest(`/posts/${postId}`)
//         .then((res) =>{
//             console.log(res);
//         })
//     })
//     fakeRequest()
// // })

// fakeRequest('/users')
// .then((res) => {
//     const id = res.data[0].id;
//     return fakeRequest(`/users/${id}`)
// })
// .then((res) => {
//     const postId = res.data.topPostId;
//     return fakeRequest(`/posts/${postId}`)
// })
// .then((res) => console.log(res))
// .catch((err) => console.log('OH NO!',err));


const fakeRequest = (url) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const data = getData(url);
            requestResult(data, resolve, reject);
        },1000)


    })
}

function requestResult(data, resolve, reject) {
    if (data) {
        resolve({ status: 200, data });
    }
    else {
        reject({ status: 404, errorMessage: 'Bad request/ resource was not found' });
    }
}

function getData(url) {
    const pages = {
        '/users': [{ id: 1, username: 'Nnaemeka' }, { id: 2, username: 'Bamgbala' }],
        '/users/1': {
            id: 1,
            username: 'Nnaemeka',
            nickName: 'Db Warrior',
            upvotes: 371,
            topPostId: 456
        },
        '/users/5': {
            id: 5,
            username: 'Nnaemeka',
            nickName: 'Bamgbala',
            upvotes: 471,
        },
        '/posts/456': { id: 456, title: 'The Modern Javascript Bootcamp', content: 'Every thing you need to know about Modern javascript to build powerful projects' },
        '/About': "The Modern Javascript Academy"
    };
    const data = pages[url];
    return data;
}

fakeRequest('/users')
.then((res) =>{
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
})
.then((res) =>{
    const postID = res.data.topPostId;
    return fakeRequest(`/posts/${postID}`)
})
.then((res) =>{
    console.log(res)
})
.catch((err) => console.log(err));







































