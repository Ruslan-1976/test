// ID - ის მიხედვით აღწერა

// const h1 = document.getElementById('myh1');
// console.log(typeof(h1));

// h1.innerHTML = 'ახალი მნიშვნელობა';

// eslint-disable-next-line no-undef
// console.log(h1.innerHTML);
// eslint-disable-next-line no-undef
// console.log(h1.innerText);

// tag -ის მიხედვით მონიშვნა:

const h2 = document.getElementsByTagName('h2');
console.log(h2);

for (let rus= 0; rus < h2.length; rus++) {
	const element = h2[rus];
	element.innerHTML = 'ახალი მნიშვნელობა';
    
}

// class - ის მიხედვით მონიშვნა:

const h3 = document.getElementsByClassName('myh3');
console.log(h3);

for (let ruso = 0; ruso < h3.length; ruso++) {
	const element = h3[ruso];
	element.innerHTML = 'გამარჯობა საქართველო.';   
}

// css - ის ლოგიკის გამოყენება ელემენტის აღწერაში dom -ში;

// 1) id - ის ლოგიკა:

// eslint-disable-next-line no-unused-vars
const qId = document.querySelector('#myh1');
// eslint-disable-next-line no-unused-vars
const qId_all = document.querySelectorAll('#myh1');

console.log(qId);
console.log(qId_all);