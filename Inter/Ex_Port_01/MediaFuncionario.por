programa
{
	real vendasJan, vendasFev, vendasMar, vendasAbr, mediaVendas
	cadeia nomeFunc
	
	funcao inicio()
	{
		escreva("Escreva o nome do funcionário: ")
		leia(nomeFunc)
		escreva ("Escreva o total de vendas do funcionário " + nomeFunc + " para o mês de janeiro: R$")
		leia(vendasJan)
		escreva ("Escreva o total de vendas do funcionário " + nomeFunc + " para o mês de fevereiro: R$")
		leia(vendasFev)
		escreva ("Escreva o total de vendas do funcionário " + nomeFunc + " para o mês de março: R$")
		leia(vendasMar)
		escreva ("Escreva o total de vendas do funcionário " + nomeFunc + " para o mês de abril: R$")
		leia(vendasAbr)
		
		mediaVendas = (vendasJan+vendasFev+vendasMar+vendasAbr)/4

		escreva("O funcionário " + nomeFunc + " teve um total de vendas para o mês de janeiro de: R$" + vendasJan + "\n")
		escreva("O funcionário " + nomeFunc + " teve um total de vendas para o mês de fevereiro de: R$" + vendasFev + "\n")
		escreva("O funcionário " + nomeFunc + " teve um total de vendas para o mês de março de: R$" + vendasMar + "\n")
		escreva("O funcionário " + nomeFunc + " teve um total de vendas para o mês de abril de: R$" + vendasAbr + "\n")
		escreva("O funcionário " + nomeFunc + " teve uma média de vendas nesse primeiro quadrimestre de: R$" + mediaVendas)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1162; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */