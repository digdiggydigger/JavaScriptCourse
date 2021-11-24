// let js = 'amazing';
// console.log(40 + 8 + 10 - 23 + 100);

// console.log("Jonas");
// console.log(23);

// let firstName = "Joey"
// let $first = "Joey"
// let first_person = "Joey"


// console.log(firstName);
// console.log($first);
// console.log(first_person);


// let country = "United Kingdom";
// let continent = "Africa";
// let population = "100,770,949";

// console.log(country, continent, population);


////////////////////////////////////////////////

// 01 Lesson 21 & 22 23/11

// const birthYear = 2000; //const will not allow the variables value to be changed
// console.log(birthYear);
// let birthday = 1999; //let will allow me to change the variable as wanted
// console.log(birthYear);

// const now = 2021;
// const ageEthan = 2021 - 2000;
// console.log(ageEthan * 2);

// const averagePopulation = "16000000";
// let population = "7000000";

// console.log(averagePopulation - population);


////////////////////////////////////////////////

// 01 - Lesson 23 24/11

// const age = 18;
// if (age === 18) console.log('You just became an adult! (Strict)');

// if (age == 18) console.log('You just became an adult! (Loose)');

// const favourite = Number(prompt("Whats your favourite number?")); //Number() Wrapped around 
// console.log(favourite);
// console.log(typeof favourite);


// if (favourite == 12) { //TYPE COERCION
//     console.log('Cool, 12 is a number')
// }


// if (favourite === 12) { //12 === 12 //NO TYPE COERCION
//     console.log('Cool, 12 is my favourite number too!')
//     console.log('IF');
// } else if (favourite === 1) {
//     console.log('ELSE IF');
//     console.log('1 is also a cool number!');
// } else if (favourite === 2) {
//     console.log('ELSE IF');
//     console.log('2 is also a cool number!');
// } else if (favourite === 3) {
//     console.log('ELSE IF');
//     console.log('3 is also a cool number!');
// } else if (favourite === 4) {
//     console.log('ELSE IF');
//     console.log('4 is also a cool number!');
// } else if (favourite === 5) {
//     console.log('ELSE IF');
//     console.log('5 is also a cool number!');
// } else {
//     console.log('ELSE');
// }

// if (favourite !== 12) {
//     console.log('Why not 12?')
// }


////////////////////////////////////////////////

// 01 - Lesson 24 24/11

const hasDriversLicense = true; // Variable A
const hasGoodVision = false; // Variable B

console.log(hasDriversLicense && hasGoodVision); // This is JS's AND operator
console.log(hasDriversLicense || hasGoodVision); // This is JS's OR operator
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('You are able to drive!');
// } else {
//     console.log('You cannot drive!');
// }

const isTired = false; // Variable C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('You are able now to drive!');
} else {
    console.log('You cannot drive today!');
}
