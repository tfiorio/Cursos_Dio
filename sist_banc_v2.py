"""
Desafio Sistema Bancário 2.0:
- Objetivo geral:
Separar as funções existentes de saque, depósito e extrato em funções. Criar duas novas funções: cadastrar usuário (cliente) e cadastrar conta bancária

Precisamos deixar nosso código mais modularizado, para isso vamos criar funções para as operações existentes: saar, depositar e visualizar histórico (extrato). Alem disso, para a versão 2 do nosso sistema precisamos cirar duas novas funções: crias usuário (cliente do banco) e criar conta corrente (vincular com usuário)

- Separação das Funções:
Devemos criar funções para todas as operações do sistema. Para exercitar tudo o que aprendemos neste módulo, cada função vai ter uma regra na pasagem de argumentos. O retorno e a forma como serão chamadas, pode ser definida por você da forma que achar melhor

- Saque:
A função deve receber os argumentos apenas por nome(keyword only). Sugestão de argumentos: saldo, valor, extrato, limite, numero_saques, limite_saques. Sugestão de retorno: saldo e extrato

- Depósito:
A função depósito deve receber os argumentos apenas por posição (positional only). Sugestão de argumentos: saldo, valor, extrato. Sugestão de retorno: saldo e extrato

- Extrato:
A função extrato deve receber os argumnentos por posição e nome (positional only e keyword only). Argumentos posicionais: saldo; Argumentos nomeados: extrato.

* Novas funções
Precisamos criar das novas funções: criar usuário e criar conta corrente. Fique a vontade para adicionar mais funções, exemplo: listar contas.

- Criar usuário (cliente):
O programa deve armazenar os usuários em uma lista, um usuário é composto por: nome, data de nascimento, cpf e endereço. O endereço é uma string como formato: logradouro, nro - bairro -cidade/sigla estado. Deve ser armazenado somente os números do cpf. Não podemos cadastrar 2 usuários com o mesmo cpf.

- Criar conta corrente:
O programa deve armazenar contas em uma lista, uma conta é composta por: agência, número da conta e usuário. O número da conta é sequencial, iniciando em 1. O número da agência e fixo: '0001'. O usuário pode ter mais de uma conta, mas uma conta pertence a somente um usuário.

* Dica
Para vincular um usuário a uma conta, filtre a lista de usuários buscando o número do cpf informado para cada usuário da lista
"""
import textwrap

def menu():
    menu = """\n
    ======================== MENU ========================
    [d]\tDepositar
    [s]\tSacar
    [e]\tExtrato
    [nc]\tNova Conta
    [lc]\tListar Conta
    [nu]\tNovo Usuário
    [q]\tSair
    =>
    """

    return input(textwrap.dedent(menu))


def depositar(saldo, valor, extrato, /):
    if (valor > 0):
        saldo += valor
        extrato += f'Depósito: \tR${valor:.2f}\n'
        print('\n=== Depósito ralizado com sucesso! ===')
    else:
        print('\n@@@ Operação falhou! O valor informado é inválido. @@@')

    return saldo, extrato


def sacar(*, saldo, valor, extrato, limite, numero_saques, limite_saques):
    excedeu_saldo = valor > saldo
    excedeu_limite = valor > limite
    excedeu_saque = numero_saques >= limite_saques

    if (excedeu_saldo):
        print('\n@@@ Operação falhou! Você não tem saldo suficiente. @@@')

    elif (excedeu_limite):
        print('\n@@@ Operação falhou! O valor do saque excede o limite. @@@')

    elif (excedeu_saque):
        print('\n@@@ Operação falhou! Número máximo de saques excedido. @@@')

    elif (valor > 0):
        saldo -= valor
        extrato += f'Saque: \t\tR${valor:.2f}\n'
        numero_saques += 1
        print('\n=== Saque realizado com sucesso! ===')


    else:
        print('\n@@@ Operação falhou! O valor informado é inválido. @@@')

    return saldo, extrato


def exibir_extrato(saldo, /, *, extrato):
    print('\n===================== EXTRATO =====================')
    print('Não foram realizadas movimentações.' if not extrato else extrato)
    print(f'\nSaldo: \t\tR${saldo:.2f}')
    print('===================================================')


def criar_usuario(usuarios):
    cpf = input('Informe o CPF (somente números): ')
    usuario = filtrar_usuario(cpf, usuarios)


def filtrar_usuario(cpf, usuarios):
    pass


def criar_conta(agencia, numero_conta_usuario):
    pass


def listar_contas(contas):
    for conta in contas:
        linha = f"""\
            Agência:\{conta['agencia']}
            C/C:\t\t{conta['numero_conta']}
            Titular:\t{conta['usuario']['nome']}
        """
        print('=' * 100)
        print(textwrap.dedent(linha))


def main():
    limite_saques = 3
    agencia = '0001'

    saldo = 0
    limite = 500
    extrato = ''
    numero_saques = 0
    usuarios = []
    contas = []

    while True:
        opcao = menu()

        if (opcao == 'd'):
            valor = float(input('Informe o valor do depósito: R$'))
            saldo, extrato = depositar(saldo, valor, extrato)

        elif (opcao == 's'):
            valor = float(input('Informe o valor do saque: R$'))

            saldo, extrato = sacar(saldo = saldo, valor = valor, extrato = extrato, limite = limite, numero_saques = numero_saques, limite_saques = limite_saques,)

        elif (opcao == 'e'):
            exibir_extrato(saldo, extrato = extrato)

        elif (opcao == 'nu'):
            criar_usuario(usuarios)

        elif (opcao == 'nc'):
            numero_conta = len(contas) + 1
            conta = criar_conta(agencia, numero_conta, usuarios)

            if (conta):
                contas.append(conta)

        elif (opcao == 'lc'):
            listar_contas(contas)

        elif (opcao == 'q'):
            break






main()