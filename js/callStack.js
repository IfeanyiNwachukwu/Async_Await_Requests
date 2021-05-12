// const multiply = (x,y) => x * y;

// const square = (x) => multiply(x,x);

// const isRightTriangle = (a,b,c) => {
//     return square(a) + square(b) === square(c);
// }

// isRightTriangle(3,4,5);

const repeat = (str,times) => {
    let result = '';
    for(let i = 0; i < times; i++){
        result += str;
    }
    return result;
}

const scream = (str) => {
    return str.toUpperCase() + '!!!';
}

const getRantText = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text,8);
    return rant;
}

const makeRant = (phrase,el) => {
    const h1 = document.createElement('h1');
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
}

makeRant('I hate mayonaise', document.body);
// makeRant('If you have to cough,please cover your mouth',document.body);