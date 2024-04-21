//! Revisão da matéria de JavaScript
// --------------------------------------------------------------- \\

let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
console.log(part);

part = str.substring(7, 13);
console.log(part);

part = str.substr(7, 6);
console.log(part);

let t1 = "Hello, World!";
let t2 = t1.toUpperCase();
console.log(t2)

t2 = t1.toLowerCase();
console.log(t2)

t1 = 'HELLOWORLD';
let char = t1.charAt(0);
console.log(char);
char = t1.charCodeAt(0);
console.log(char);
