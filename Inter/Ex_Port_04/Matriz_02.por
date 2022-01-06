programa
{
	cadeia cadastro[3][3]
	inteiro i, j
	
	funcao inicio()
	{
		i = 0
		j = 0
		
		faca {
			escreva("Digite o nome do funcionário: ")
			leia(cadastro[i][j])
			j++
			escreva("Digite a cidade de domicílio do funcionário: ")
			leia(cadastro[i][j])
			j++
			escreva("Digite o celular do funcionário: ")
			leia(cadastro[i][j])
			j=0
			i++
		}enquanto (i<=2)

		i = 0
		j = 0

		faca{
			escreva("O funcionário: " + cadastro[i][j])
			j++
			escreva(" reside em: " + cadastro[i][j])
			j++
			escreva(" e tem o celular número: " + cadastro[i][j] + "\n" + "\n")
			j = 0
			i++
		} enquanto (i<=2)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 391; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */