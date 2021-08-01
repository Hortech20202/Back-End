# Hortech Api

## Pré Requisitos

1. Instale o PostgreSQL. Recomendo que instale a imagem oficial docker (se você tiver docker) e rode-o num container. É seguro, rápido e depois que você quiser apagá-lo é só ir lá e deletar a imagem/container.
   - Caso faça pelo docker, para acessar o banco de dados dentro do container execute `docker start {nome-container}` para ter o container rodando. Após isso execute `docker exec -it {nome-ou-id-do-container} bash` para executar o psql (cliente postgres) pelo terminal e vistoriar suas tabelas por meio do comando `psql -U {username} -d {database}`. Se não preferir desta forma, você pode executar uma extensão do vscode para ver suas tabelas, dá no mesmo. Lembre-se apenas de inserir os dados para conexão corretos.
   - Caso tenha windows apenas baixe o instalador postgres e defina username, senha, etc. Se você preferir, ele também instala um cliente interativo com uma visualização bem mais legal que um bash seco, é só escolher nas opções de instalação.

**Importante!**
Para que a sua aplicação se conecte corretamente, ou você cria um banco de dados com as configurações que estão no ./database/config/config.json e o conecta diretamente, ou muda os valores da conexão no development. Sem essa configuração, o sequelize não irá funcionar.

2. Instale o nodejs com o npm (12.0.0 em diante)
3. Rode o comando `npm install` dentro do diretorio raiz da aplicação para instalar as dependências em `node_modules`

## Rodando

1. Execute `npm run dev` na raiz para executar o nodemon, a cada atualização `ctrl+s` na aplicação ele irá atualizar o servidor. Ele estará rodando na porta `3001`. **Obs: Lembre de se certificar que o seu banco de dados está up na porta 5432**
2. Se preferir executar as rotas por meio do `./web` é só abrir com o vscode, instalar a extensão **REST Client** e executar a rota desejada, ou criar outra, utilizando a sintaxe que já utilizei nos exemplo.
3. Se não desejar, baixe o postman.

## Sequelize

Alguns comandos úteis do sequelize:

* Para criar um model+migration `npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string`
* Para migrar as migrações `npx sequelize-cli db:migrate` ele irá criar as referidas tabelas no banco.
* Para criar seeds (dados no banco de dados) pelo sequelize `npx sequelize-cli seed:generate --name demo-pessoa`
* Para inserir os seeds `npx sequelize-cli db:seed:all`

[Documentação](https://sequelize.org/master/manual/)