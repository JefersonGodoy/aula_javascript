var nome = 'Godoy';
var n1 = 5;
var n2 = 3;
var frase = 'Japão é o melhor time do mundo'

//alert(nome + ' tem ' + idade + ' anos');

//alert(idade + idade2);

//console.log(n1 * n2);
//console.log(frase);
//console.log(frase.replace('Japão', 'Brasil'));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());


// --- ARRAY ---

var lista = ['maça', 'pera', 'laranja'];
lista.push('uva');
//lista.pop();

//console.log(lista.length);
//console.log(lista);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(' - '))

/*
var fruta = {nome: 'maça', cor: 'vermelha'}
console.log(fruta.nome);
*/


var frutas = [{nome: 'maça', cor: 'vermelha'}, {nome: 'uva', cor: 'roxa'}]
console.log(frutas);


// --- CONDIÇÕES ---

/*
var idade = prompt('Qual sua idade? ');

if(idade >= 18) {
    alert('Maior de idade!!!!');
} else {
    alert('Menor de idade!!!!');
};
*/

/*
var count = 0;

while(count <= 5 ) {
    console.log(count);
    alert(count)
    count ++;
}
*/

var count;

for(count = 1; count <=5; count ++) {
    alert(count);
}
