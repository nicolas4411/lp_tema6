let compras = ["pão", "leite", "ovo", "queijo" , "frutas"];
compras.unshift("café");
compras.push("manteiga");

console.log(compras);

let remover = compras.pop();
console.log(remover);
console.log(compras);

let primeiro = compras.shift();
console.log(primeiro);
console.log(compras);

compras.splice(1,1, "chocolate");
console.log(compras);

compras.splice(3,2,"suco", "queijo");
console.log(compras);
