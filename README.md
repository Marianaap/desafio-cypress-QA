# Testes Automatizados da Loja EBAC
Suite de testes automatizados desenvolvida em Cypress, validando o fluxo de compra com combinações de variações de produto.

## Instalação das dependências
Antes de iniciar, certifique-se de ter o **Node.js** com o **npm** instalado.

1. Clone o repositório:

```git clone https://github.com/Marianaap/desafio-cypress-QA.git```

2. Acesse a pasta do projeto:

```cd desafio-cypress-QA```

2. Instale as dependências:

```npm install```

## Execução dos testes
Modo interativo (Dashboard do Cypress)

```npx cypress open```

Modo headless (execução em terminal)

```npx cypress run```


## Cenários Automatizados
#### Autenticação
   - Cenário 1 - Login com usuário conhecido:
      Valida que um usuário com credenciais corretas consegue acessar a conta.
      Escolhido por ser o fluxo essencial para qualquer interação autenticada.

   - Cenário 2 - Criação de conta:
   Valida que um usuário consegue criar uma conta com sucesso. Importante para garantir integridade do cadastro.

#### Compras
- Cenário 1 - Adicionar um produto ao carrinho:
   Valida que é possível adicionar um produto ao carrinho. Fluxo essencial em uma plataforma de E-commerce.