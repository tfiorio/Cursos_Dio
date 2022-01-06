// Programa para treinar o uso de se e casa

programa
{
	
	funcao inicio()
	{
		escreva("1 - Abrir Netflix; 2 - Amazon Prime; 3 - HBO GO; 4 - Sair")

		// cria a variável que irá armazenar a opção do cliente
		inteiro menu = 0 

		// Nesta opção utilizamos o se
		escreva("\n" + "QUal a sua opção: ")
		leia(menu)

		//se (menu == 1) {
			//escreva("Ok!! Abrir Netflix!!")
		//}
		//se (menu == 2) {
			//escreva("Ok!! Abrir Amazon Prime!!")
		//}
		//se (menu == 3) {
			//escreva("Ok!! Abrir HBO GO!!")
		//}
		//se (menu == 4) {
			//escreva("Saindo do menu.......")
		//}

		// Nesta opção utilizamos o case
		escolha(menu)
		{
			caso 1:
				escreva("Ok!! Abrir Netflix!!")
			pare
			caso 2:
				escreva("Ok!! Abrir Amazon Prime!!")
			pare
			caso 3:
				escreva("Ok!! Abrir HBO GO!!")
			pare
			caso 4:
				escreva("Saindo do menu.......")
			pare
			caso contrario:
				escreva("Você deve escolher entre 1 e 4")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 881; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */