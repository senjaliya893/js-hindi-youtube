const name = "vivek"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vivek-s-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());  
console.log(gameName.charAt(5));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "  vivek  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vivek.com/vivek%20senjaliya"

console.log(url.replace('%20', "-"))

console.log(url.includes('vivek'))

console.log(gameName.split('-'));