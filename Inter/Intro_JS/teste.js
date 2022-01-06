// usamos "//" para comentários de uma linha
/*
e assim para comentários de várias linhas
*/

var desconto = 0.2; // variáveis podem ter seus valores alterados durante a execução do programa. Como boa prática para codificação em javascript, utilizamos letra minúscula para declarar as variáveis 
const PRECO = 2; // constantes não podem ter seus valores alterados durante a execução do programa. Como boa prática para codificação em javascript, utilizamos letra maiúscula para declarar as constantes
var total = PRECO - desconto; // caso precisemos alterar o valor de uma constante, podemos criar uma nova variável e atribuir o valor da constante com a alteração que ela irá ter, e essa variável ira receber o valor da constante alterado

// declaração de função
function soma(a, b) {
   return a + b
}

// chamando a função que declaramos
soma(3, 5)

console.log("Hello world")

// declarando uma função para rodarmos no console
function returnEvenValues(array) {
   let evenNums = [];
   for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) { // aqui estamos informando que se o número for divisivel por 2 "%2===0" ele é par e irá para o array
         evenNums.push(array[i])
      }
      else {
         console.log(`${array[i]} não é par!`) // aqui utilizamos a crase para passar um comando e uma informação
      }
   } 
   console.log("Os números pares são: ", evenNums);
}

let array = [1, 2, 4, 5, 7, 8]

returnEvenValues(array);