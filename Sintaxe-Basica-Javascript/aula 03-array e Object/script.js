//O que são vetores, ou arrays

// Como declarar um array
/*let array = ['string', 1, true];
console.log(array);*/

//pode guardar vários tipos de dados
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array);*/

//como acessar um valor dentro do array
//OBS: Se o let array não estiver visível, estiver como comentário, não é possível manipular os arrays. 
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]);*/

//manipulando arrays
//forEach - função, por isso os ()
/*array.forEach(function(item, index){console.log(item, index)});*/

//push - adiciona um novo item no final do array, qualquer tipo de dado
/*array.push([]);
console.log(array);*/

//pop - remove um item do final do array
/*array.pop();
console.log(array);*/

//shift - remove um item do início do array
/*array.shift();
console.log(array);*/

//unshift - adiciona um item no início do array
/*array.unshift('novo item no inicio');
console.log(array);*/

//indexOf - retorna um índice de um valor
/*console.log(array.indexOf(true));*/ 

//splice - remove ou substitui um item pelo indice
/*array.splice(0, 3); - //apagou os índices do 0 até o 3
console.log(array);*/

//slice - retorna a parte de um array existente
/*let novoArray = array.slice(0, 3);
console.log(novoArray);*/

// OBJETOS
let object = {string: 'string', numer: 1, Boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

//desustruturação do objeto
var string = object.String; 
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);





