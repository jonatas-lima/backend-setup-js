# backend-setup-js
Repositório voltado para quem está iniciando no desenvolvimento web na parte de backend
Como exemplo, serão utilizados produtos para vender no banco de dados (apenas por motivos didáticos) 
**obs: para melhor entendimento acompanhar os commits**

# Tecnlogias utilizadas
- Gerenciador de pacotes do node, [npm](https://www.npmjs.com/)
- Framework web [express](https://expressjs.com/pt-br/)
- Query builder [knex.js](http://knexjs.org/)

## instalando o npm
Abra um terminal e digite os seguintes comandos:

1. `curl http://npmjs.org/install.sh | sudo sh`
2. `npm --version` (verifica a versão instalada)

## iniciando o projeto
Já com o npm instalado e no diretório do projeto execute `npm init -y` para iniciar o projeto
O parâmetro -y responde sim para as perguntas que o npm irá fazer
Feito isso, adiciona-se o express às dependências `npm install express`

## configurando o banco de dados
Para configurar o banco de dados será utilizado uma query builder chamada knex para facilitar a criação e administração de tabelas
1. No terminal do projeto digite `npm install knex --save` para adicionar o knex às dependências do projeto
2. Instale um banco de sua preferência (MySQL, SQLite, Oracle, etc)
```
$ npm install pg
$ npm install sqlite3
$ npm install mysql
$ npm install mysql2
$ npm install oracledb
$ npm install mssql
```
3. `knex init` para criar a knexfile.js, o arquivo com as configurações do banco de dados
4. Crie as migrations e depois execute `knex migrate:latest`

Feitos esses passos, o básico do backend de sua API estará pronta.
As configurações utilizadas para a knexfile e no package.json estão no código.
                                                                                                                                                    1,1         
