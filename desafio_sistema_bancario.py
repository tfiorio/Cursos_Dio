"""
## programa para simular um sistema bancário simples.
## esse sistema deve permitir apenas 3 operações: saque, depósito e extrato
## ele deve permitir apenas depósitos de valores positivos
## não preisamos nos preocupar com autenticação de usuário, pois haverá apenas um no momento
## todas as operações devem ser armazenadas em uma variável para serem demostradas em um extrato
## o sistema deve permitir apenas 3 saques diários, com limite de R$ 500,00 por saque
## caso o usuário queira saquer um valor maior do que o permitido ou acima do saldo, o sistema deve informar (não será possível sacar o dinheiro por falta de saldo)
## o extrato deve exibir todas as transações efetuadas e o saldo ao final. No caso de não haver transações para exibir mostrar a mensabem (Não foram realizadas movimentações)
## os valores devem ser mostrados utilizado a máscara R$ xxx.xx
"""

# definição de variáveis
menu = """
    [d] - Depósito
    [s] - Saque
    [e] - Extrato
    [f] - Fechar e sair
"""
saldo = 0
d = 0
s = 0
e = []
saques_efetuados = 0
LIMITE_SAQUE = 3
LIMITE = 500

while True:
    opcao = input(menu)

    if (opcao == 'd'):
        d = float(input('Informe o valor a ser depositado: R$ '))
        if (d > 0):
            saldo += d
            e.append(f'Depósito: R${d:.2f}')
        else:
            print('Operação não efetuada. Valor depositado inválido.')

    elif (opcao == 's'):
        print('Limite por transação de R$ 500.00')
        s = float(input('Informe o valor que deseja sacar: R$ '))
        sem_limite = LIMITE < s
        sem_saldo = saldo < s
        sem_saque = saques_efetuados >= LIMITE_SAQUE

        if (sem_saque):
            print('Operação não efetuada. Quantidade máxima de saque diários excedida.')
        elif (sem_limite):
            print('Operação não efetuada. Valor solicitado para saque superior ao limite permitido por saque.')
        elif (sem_saldo):
            print('Operação não efetuada. Valor solicitado para saque superior ao saldo existente em conta.')
        elif (s > 0):
            saldo -= s
            e.append(f'Saque: R${s:.2f}')
            saques_efetuados += 1
        else:
            print('Operação não efetuada. Valor informado inválido')

    elif (opcao == 'e'):
        print('*' * 20)
        if (len(e) == 0):
            print('Não foram realizadas movimentações')
        else:
            for i in range(len(e)):
                print(e[i])
        print(f'Saldo: R${saldo:.2f}')
        print('*' * 20)

    elif (opcao == 'f'):
        break

    else:
        print('Opção inválida. Escolha uma opção entre as abaixo:')

    

