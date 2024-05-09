// Exercise: callback
// IT
// Implementate una funzione che si chiama forEach che ha come argomenti:
// - un array
// - una callback (funzione)
// La callback viene eseguita su ogni elemento dell' array
// Il forEach non ritorna nulla

// EN
// The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

// Esempio (Example):
// let alphabet = "";
// const letters = ["a", "b", "c", "d"];
// forEach(letters, function (char) {
//   alphabet += char;
// });
// console.log(alphabet);
// should output abcd

// Another reimplementation of a native Array method. Notice the difference with map, map returns an array, forEach doesn't return anything so whatever needs to happen needs to take place in the body of the callback function.
