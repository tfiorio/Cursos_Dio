programa
{
	// declaração de variáveis globais
	inteiro numTabuada, valorTabuada, contador
	
	
	funcao inicio()
	{
		// inicializando o contador
		contador = 1
				
		escreva("Qual Tabuada você quer ver: ")
		leia(numTabuada)

		escreva("A tabuada do " + numTabuada + " é:" + "\n")

		faca {
			valorTabuada = numTabuada * contador
			escreva(numTabuada + " * " + contador + " = " + valorTabuada + "\n")
			contador++
		}
		enquanto (contador<=10)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 210; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */