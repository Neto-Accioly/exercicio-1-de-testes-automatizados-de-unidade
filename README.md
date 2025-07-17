# Exercício de Teste Unitário 2 - Mentoria Júlio de Lima

Este repositório faz parte da minha jornada de aprendizado na área de Qualidade de Software (QA), onde estou praticando conceitos ensinados na **Mentoria 2.0 do Júlio de Lima**.  
O foco deste exercício é a **automação de testes unitários** utilizando **JavaScript puro** e a biblioteca nativa `assert` do Node.js.

---

## O que estou praticando

- Estruturação de código em JavaScript com separação entre lógica de negócio (`src`) e testes (`test`);
- Criação de funções puras para simular consultas com base em dados fictícios;
- Escrita de testes unitários utilizando `describe` e `it` para garantir o comportamento esperado das funções;
- Uso da asserção `strictEqual` da biblioteca `assert` para validar:
  - valores esperados vs valores retornados,
  - tratamento de entradas inválidas.

---

## Estrutura do Projeto

exercicioDeTestesAutomatizadosDeUnidade2/
├── node_modules/ # Dependências do projeto
├── src/
│ └── pesquisar.js # Função que retorna dados de uma "pessoa" com base no CPF
├── test/
│ └── pesquisar.test.js # Testes automatizados da função
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


---



## Tecnologias utilizadas e ferramentas

- Node.js (ambiente de execução JavaScript)
- Módulo `assert` (biblioteca nativa para testes)
- JavaScript (ES6)
- Git e GitHub (versionamento de código)
- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/) — framework de testes

---

## Como executar os testes

1. Clone o repositório dentro da pasta desejada:

```bash
git clone https://github.com/Neto-Accioly/exercicio-teste-unitario2.git
```

2. Inicialize o projeto Node.js (caso ainda não tenha o package.json):

```bash
npm init -y
```
3. Instale o Mocha como dependência de desenvolvimento:
```bash   
npm install --save-dev mocha
```
4. Configure o script de teste no package.json.
No bloco "scripts", adicione:
```bash
"scripts": {
  "test": "mocha"
}  
```
5. Execute os testes com o comando:
```bash
npm test
```

## Objetivo
O objetivo deste exercício é reforçar os conceitos de teste de unidade e cobertura de sentença, garantindo que todos os caminhos do código sejam executados ao menos uma vez durante os testes.