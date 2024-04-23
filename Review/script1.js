// //! Revisão da matéria de JavaScript
// // --------------------------------------------------------------- \\

// let str = "Apple, Banana, Kiwi";
// let part = str.slice(-12, -6);
// console.log(part);

// part = str.substring(7, 13);
// console.log(part);

// part = str.substr(7, 6);
// console.log(part);

// let t1 = "Hello, World!";
// let t2 = t1.toUpperCase();
// console.log(t2)

// t2 = t1.toLowerCase();
// console.log(t2)

// t1 = 'HELLOWORLD';
// let char = t1.charAt(0);
// console.log(char);
// char = t1.charCodeAt(0);
// console.log(char);

// t1 = 'Hello, World!';
// t2 = t1.split(",");
// console.log(t2);

// t1 = "Please locate where 'locate' occours!";
// t2 = t1.indexOf("locate");
// console.log(t2);

// t2 = t1.lastIndexOf("locate");
// console.log(t2);

// t2 = t1.search("locate");
// console.log(t2);

// t2 = t1.startsWith("locate");
// console.log(t2);

// t2 = t1.endsWith("locate");
// console.log(t2);

// console.log(Math.abs(-0.8));

// console.log(Math.abs(0.8));

// console.log(Math.ceil(0.8));

// console.log(Math.ceil(-0.8));

// console.log(Math.floor(0.8));

// console.log(Math.floor(-0.8));

// console.log(Math.round(0.8));

// console.log(Math.round(-0.8));

// console.log(Math.floor(4.05));

// console.log(Math.trunc(0.8));

// console.log(Math.max(2, 0.8, 5, -15));
// console.log(Math.min(2, 0.8, 5, -15));

// console.log(Math.pow(2, 3));

// console.log(2**3);

// console.log(Math.sqrt(9));

// console.log(9 ** (1/2));

// console.log(Math.cbrt(27));

// console.log(27 ** (1/3));

// console.log(Math.random());

// let pessoa = {
//     nome: "João",
//     idade: 20,
//     telefone: null,
//     endereco: {
//         logradouro: "Rua Brasil",
//         numero: 1301,
//         bairro: "Centro"
//     }
// }

// console.log(pessoa.nome);
// console.log(pessoa["idade"]);
// console.log(pessoa.telefone);
// console.log(pessoa.endereco.logradouro);
// console.log(pessoa["endereco"]["numero"]);
// console.log(pessoa.endereco.bairro);
// console.log(pessoa.peso);

// const soma = (a, b, r) =>{
//     r = a + b;
//     console.log(r, " / ");
// }

// x = 0;
// soma(7, 8, x);
// console.log(x);

const fb = () =>{
    console.log(x);
}
const fa = () =>{
    let x = 7;
    fb();
}

let x = 4;
fa();