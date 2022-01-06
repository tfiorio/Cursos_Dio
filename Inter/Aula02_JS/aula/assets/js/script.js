//a função alert cria um box com uma mensagem
//alert("Hello World")

/* 
TIpos primitivos

//boolean
var VouF = false;
console.log(typeof(VouF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = "josé";
console.log(typeof(nome));

//function
var funcao = function() {};
console.log(typeof(funcao));

//como declarar os tipos
var variavel = "josé";
variavel = "maria";
console.log(variavel);

let variavel2 = "josé";
variavel2 = "maria";
console.log(variavel2);

const constante = "josé"
console.log(constante);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){
   let escopoLocalInterno = "local";
   console.log(escopoLocalInterno); // caso esse console não estivesse dentro da função, o valore não seria mostrado quando chamasse a função
}

escopoLocal();

//atribuição
var atribuicao = "josé";

//comparação
var comparacao = "0" == 0; //quando utilizamos "==" nós comparamos apenas os valores, dessa forma nessa comparação teremos um retorno true, pois "0" é igual a 0.
console.log(comparacao);

// comparação identica
var comparacaoIdentica = "0" === 0; //quando utilizamos "===" nós comparamos não apenas os valores, mas também os tipos, dessa forma, nessa comparação nós teremos um retorno false, pois "0" string é diferente de 0 number.
console.log(comparacaoIdentica);

//adição
var adicao = 1+1;
console.log(adicao);

//subtração
var subtracao = 2-1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2*;
console.log(multiplicacao);

//divisão real
var divisaoReal = 6/3;
console.log(divisaoReal);

//divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira); //aqui teremos como resultado o resto da divisão, que é 1

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue); //o retorno aqui será True, pois 5 é maior do que 2

//menor que
var menorQue = 5 < 2;
console.log(menorQue); 

//maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//"e" lógico
var e = true && true;
console.log(e);

//"ou" lógico
var ou = false || true;
console.log(ou);

//"não" lógico
var nao = !true;
console.log(nao);
*/

/*
Arrays e Objects

//declarando array, podemos inserir qualquer tipo de dado dentro do array
let array = ["String", 1, true];
console.log(array);

//podemos ter arrays dentro de arrays
let array = ["String", 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array);

//o método forEach informa o indice dos valores que estão no array
array.forEach(function(item, index){console.log(item, index)});

//o método push insere um item no final do array
array.push('novo item');
console.log(array);

//o método pop remove o último item do array
array.pop();
console.log(array);

//o método shift remore o primeiro item do array
array.shift();
console.log(array);

//o método unshift insere um item no início do array
array.unshift('novo item no inicio');
console.log(array);

//o método indexOf informa o indice de uma valor conhecido no array
console.log(array.indexOf(true));

// o método splice deleta um range de valores de um array
array.splice(0, 3);
console.log(array);


// o método slice retorna um range de valores de um array
console.log(array.slice(0, 3))

//nós também podemos inserir esse range gerado pelo slice em uma nova variável
let novoArray = array.slice(1, 5);
console.log(novoArray);

//Obejtos são variáveis com a sintax propriedade/valor
let objeto = {
   string: 'String',
   number: 1,
   boolean: true,
   array: ['array1'],
   objetoInterno: {
      objetoInterno: 'ObjetoInterno'
   }
};
console.log(objeto);
console.log(objeto.number);

//podemos inserir uma valor dentro de um objeto em uma variável
var string = objeto.string;
console.log(string);
*/

/*
Estruturas condicionais

//método if(se), a sintax é if([condição]){declaração}
var jogador1 = 0;
var jogador2 = 0;
var placar;

//if ternário, dessa forma passamos todos as verificações e ações em uma única linha, para isso utilizamos "?" para if e ":" para else
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos"): console.log("Os jogadores são inválidos");

if(jogador1 > 0 && jogador2 ==0){
   console.log("Jogador 1 marcou ponto");
   placar = jogador1 > jogador2;
}
else if(jogador2 > 0 && jogador1 == 0){
   console.log("Jogador 2 marcou ponto");
   placar = jogador2 > jogador1;
}
else {
   console.log("Ninguém marcou ponto");
}

switch(placar){
   case placar = jogador1 > jogador2:
      console.log("Jogador 1 ganhou");
      break;
   case placar = jogador2 > jogador1:
      console.log("Jogador 2 ganhou");
      break;
   default:
      console.log("Ninguém ganhou");
}

//método for(para).Esse método cria uma estrutura de repetição que executa uma declaração até a condição for diferente de true, a sintax é for([expressão], [condição], [incremento]){declaração}.
let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];
let object = {
   propriedade1: "valor1",
   propriedade2: "valor2",
   propriedade3: "valor3"
};

for(let i = 0; i < array.length; i++){
   console.log(i);
}

//método for/in. Esse método cria uma estrutura de repetição onde irá mostrar os índices de um array ou as propriedades de um objeto
for(let i in array){
   console.log(i);
}

//aqui não iremos declarar a variável i, assim podemos mostrar que o js irá entender que o "i" é uma variável de controle interna e irá criar a variável ele mesmo
for(i in object){
   console.log(i);
}

//método for/of. Esse método cria uma repetição onde irá mostrar os valores de um array
for(i of array){
   console.log(i);
}

//método while. Esse método cria uma estrutura de repetição que é executada enquanto uma condição for verdadeira, esse verificação e realizada antes de cada execução da declaração fornecida
a = 0;
while (a < 10){
   a++;
   console.log(a);
}

//método do/while. Esse método executa uma instrução até que uma condição retorne false, a verificação é feita após a execução
do{
   a++;
   console.log(a)
} while (a < 10);
*/

/*
Funções

//funções declarativas, elas precisam, obrigatóriamente, possuir um nome
function funcao(){
   console.log("Essa mensagem veio de uma função");
}

funcao();

//podemor criar funções passando parâmentro para a função
function mensagem(primeiro, segundo){
   console.log(primeiro, segundo);
}

mensagem("Hello World", "Tudo certo!");

//função de expressão, elas não precisam ter um nome, mas são associadas a variáveis
var funcao = function func(){
   console.log("Função de expressão com nome");
}

var funcao2 = function(){
   console.log("Função de expressão sem nome");
}

funcao();
funcao2();

//arrow function, elas não funções anônimas de sintax curta e não podem ser nomeadas
var funcao3 = ()=>{
   console.log("Sou uma arrow function");
}

funcao3();
*/