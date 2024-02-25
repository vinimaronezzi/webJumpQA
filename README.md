# Projeto Cypress WebJump

## Instalação
Para executar este projeto localmente, siga estas etapas:

Certifique-se de que você tenha o Node.js instalado em seu computador. Você pode baixá-lo em [nodejs.org.](https://nodejs.org/en/download/).

Clone este repositório em sua máquina local usando o comando:
`git clone https://github.com/vinimaronezzi/webJumpQA.git`  
Navegue até o diretório do projeto:
`cd /webJumpQA/`  
Instale as dependências do projeto:
`npm install`

## Arquitetura do Projeto
- 📂**cypress/:** Contém todos os arquivos relacionados aos testes Cypress.  
  - 📂**e2e/:** Contém os arquivos de teste.  
    - 🧪**add-product.cy.js:** Suite de teste para adicionar produto ao carrinho.  
    - 🧪**checkout.cy.js:** Suite de teste para finalização de compra.  
    - 🧪**login.cy.js:** Suite de teste para login do usuário.  
    - 🧪**register.cy.js:** Suite de teste para criação de novo usuário.
  - 📂 **fixtures/:** Armazena massa de testes (**NÃO UTILIZADO**).  
  - 📂 **support/:** Contém arquivos de suporte, como comandos personalizados, configurações e encapsulamento.
      - 📂 **pages/:** Contém pastas referenciando as páginas utilizadas para os testes do projeto.
        - 📂 **checkout/:** Contém um arquivo `index.js` para encapsulamento do código da página `/checkout`.  
        - 📂 **costumer/:** Contém um arquivo `index.js` para encapsulamento do código da página `/costumer`.  
        - 📂 **men/:** Contém um arquivo `index.js` para encapsulamento do código da página `/men`.
      - 🧪 **commands.js:** Arquivo para criação de comandos personalizados (**NÃO UTILIZADO**).  
      - 🧪 **e2e.js**: Arquivo para armazenar configurações globais/variáveis de ambiente (**NÃO UTILIZADO**).
  - 📂 **cypress.json:** Arquivo de configuração do Cypress.  
  - 📂 **package.json:** Arquivo de configuração do npm, contendo as dependências do projeto e scripts.
  - 🧪 **cypress.config.js:** Arquivo para costumização das configurações do Cypress. 
- 📂 **node_modules/:** Contém todas as dependências do Node.js.  
 

## Executando os Testes
Para execução dos testes via interface gráfica, utilize o comando: `npx cypress open`.  
Para execução dos testes via linha de comando, utilize: `npx cypress run`.  
Caso queira executar um teste específico via linha de comando, utilize: `npx cypress run --spec "cypress/e2e/teste-exemplo.cy.js"`.  

## Suites de Testes
**DISCLAIMER**  
Não sou favorável ao uso de dados dinâmicos para testes automatizados, porém, neste caso, como não havia documentação de rotas API ou banco de dados, à fim de deixar os testes independetes, utilizei a biblioteca `faker.js` para massa de dados dos testes.


### Adicionar produto ao carrinho
https://github.com/vinimaronezzi/webJumpQA/assets/129127304/ed0677cf-a4fe-4993-86cd-8fa12b4e38a7

### Finalização de compra
https://github.com/vinimaronezzi/webJumpQA/assets/129127304/d209c4d0-f07e-4eba-9eba-91420796878b

## Login de usuário
https://github.com/vinimaronezzi/webJumpQA/assets/129127304/677d93de-6e9f-4b01-acd4-c6a16db3a645

## Criação de usuário
https://github.com/vinimaronezzi/webJumpQA/assets/129127304/eb375354-306f-4b4b-b8b8-8578e1b3d541
