# Introduction

Teste Técnico para empresa de Logística Flash Courier

# PARA EXECUTAR O PROJETO

## TECNOLOGIAS UTILIZADAS

- BACKEND - NodeJS, Prisma.IO, Express, Nodemon e Typescript.
- FRONTEND - ReactJS, React-dom, React-router-dom, Unform, Axios, Polished, Styled-components, Typescript
- BANCO DE DADOS - Postgresql

## CLONE O PROJETO DO REPOSITÓRIO

https://github.com/luishenriqs/flashCourier

## INSTALAÇÃO DOS PACOTES E CRIAÇÃO DO BANCO DE DADOS

- BACKEND - Abra o terminal e navegue para a pasta "flash-back". Depois execute o comando yarn.
- FRONTEND - Abra um outro terminal e navegue para a pasta "flash-web", e repita o mesmo processo.

PARA CRIAR O BANCO DE DADOS

- DOCKER - Em um terminal dentro do diretório "flash-back" execute o comando docker-compose up
- Em seguida crie as migrations com o comando "yarn prisma migrate dev"

## VISUALIZAÇÃO DA TABELA DO BANCO DE DADOS

- Para visualizar a tabela do banco de dados em uma aba no navegador execute o comando "yarn prism studio"

## INICIALIZAÇÃO DO PROJETO

- BACKEND - Em um terminal aberto no diretório "flash-back" execute o script "yarn dev"
- FRONTEND - Em um terminal aberto no diretório "flash-web" execute o script "yarn start"

## CRIAÇÃO DE DADOS NA TABELA

- Para popular a tabela do banco de dados utilize o aplicativo Insomnia.
- Faça a importação da coleção Insomnia que esta disponível na raiz do projeto para download
