/*
Vamos aqui criar uma calculadora como nosso primeiro programa
iremos utilizar algumas funções pré-definidas de js:
Number() - converte valores texto em número;
Prompt() - registra entrada de usuários;
Alert() - mostra uma box com uma mensagem para o usuário;
Template String - para usar strings junto com expressões, para isso utilizamos crase ao invés de aspas
*/

function calculadora(){
   const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)'));

   

   if(!operacao || operacao >= 7){
      alert('Erro - operação inválida');
      calculadora();
   } else{
      let n1 = Number(prompt('Insira o primeiro valor: ')); //utilizamos o number, pois as entradas por prompt são strings
      let n2 = Number(prompt('Insira o segundo valor: '));
      let resultado;

      if(!n1 || !n2){
         alert('Erro - parâmetros inválidos');
         calculadora();
      } else{
         /*
         if(operacao == 1){
            soma();
         } else if(operacao ==2){
            subtracao();
         } else if(operacao == 3){
            multiplicacao();
         } else if(operacao == 4){
            divisaoReal();
         } else if(operacao == 5){
            divisaoInteira();
         } else if(operacao == 6){
            potenciacao();
         }
         vamos alterar esse if por um switch
         */
         switch(operacao){
            case 1:
               soma();
            case 2:
               subtracao();
            case 3:
               multiplicacao();
            case 4:
               divisaoReal();
            case 5:
               divisaoInteira();
            case 6:
               potenciacao();
         }
      
         function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao();
         }
      
         function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao();
         }
      
         function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao();
         }
      
         function divisaoReal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao();
         }
      
         function divisaoInteira(){
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao();
         }
      
         function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}ª potência é igual a ${resultado}`);
            novaOperacao();
         }
      
         function novaOperacao(){
            let opcao = prompt('Deseja fazer outra opção?\n 1 - Sim\n 2 - Não');
      
            if(opcao == 1){
               calculadora()
            }
            else if(opcao ==2){
               alert('ok, até a próxima!');
            }
            else{
               alert('Digite uma opção válida');
               novaOperacao();
            }
         }
      }
   }
}



calculadora();