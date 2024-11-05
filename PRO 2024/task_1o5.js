// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };

// alert(person.lastName);


// const people = {
//     firstPerson: {
//         firstName: "John",
//         lastName: "Doe"
//     },
//     secondPerson: {
//         firstName: "Jane",
//         lastName: "Doe"

//     },

// };

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
// };

// alert(person.firstName + " " + person.lastName + " " + person.age);


// class books {
//     constructor (title, releaseYear, author) {
//         this.title = title;
//         this.releaseYear = releaseYear;                  // Object Class
//         this.author = author;
//     }
//     cast() {
//         return alert("Avada Kadavra");
//     };
// };

// function Book (title, releaseYear, author) {
//     this.title = title;
//     this.releaseYear = releaseYear;
//     this.author = author;

//     this.cast = function() {
//        return alert("Avada Kedavra");                    // object constructor. Dont forget the return xD
//     };
// };

// Schema... I used the webpage, aint nobody got time for that...

// let serializedData = JSON.stringify({
//     title: "Harry Potter",
//     releaseYear: 1997,
//     author: "J.K. Rowling"                  // JSON.stringify()   where you put the {} inside.
// });

// console.log(serializedData);

// let dataToParse = JSON.parse(serializedData);   // JSON.parse() 
// console.log(dataToParse);


// Check the number of properties in the following objects:
// Check which of these are empty objects.

// const o1 = new Date();
// const o2 = new String();
// const o3 = new Number();
// const o4 = {};

// const testData = (data) => {
//     if (Object.keys(data).length === 0 && data.constructor === Object) {             // Standard testData method to check if an object is empty
//         console.log('Empty Object:');
//         return data;
//     } else {
//         console.log('Not an empty object:');
//         return data;
//     }
// }

// for (data of [o1, o2, o3, o4]){                  // for loop to use testData to check every object
//     testData(data);
// }
