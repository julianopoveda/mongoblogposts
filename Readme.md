# MongoDB Blog Post 
![mongologo by mongodb](https://docs.mongodb.com/images/mongodb-logo.png)

Este repositório contém todos os códigos e exemplos utilizados nos posts com a temática MongoDB

## Rodando o Mongo DB via Docker
Ainda que seja possível baixar e [instalar o mongo localmente](https://docs.mongodb.com/manual/administration/install-community/), vou utilizar o docker como plataforma para rodar uma versão local do mongo.

> Não recomendo a utilização desta configuração em ambiente de produção. 
> Esta configuração é meramente para fins de estudo. Caso queira subir uma versão de produção [consulte a documentação técnica no site da MongoDB](https://docs.mongodb.com/manual/)

No docker rode o seguinte comando

```shell
docker run -d -p 27017:27017 mongo:5-focal
```
O comando acima cria o mongo como um serviço (daemon) e mantém o container para uso futuro.

Alternativamente é possível rodar o docker-compose em anexo com o comando

```shell
docker-compose up -d
```

## Importando os dados
Para importar os dado baixe o [mongotools](https://www.mongodb.com/try/download/database-tools?tck=docs_databasetools) e rodar o comando:

Importando os veículos
```sh
mongoimport --uri=mongodb://localhost:27017 --collection=cars --db=example --jsonArray db_data/carro_dump.json
```
Importando o arquivo de vendas concessionaria
```sh
mongoimport --uri=mongodb://localhost:27017 -c vendas_concessionaria --db examples --jsonArray db_data/vendas_concessionaria.json
```
Importando o arquivo de vendas montadora
```sh
mongoimport --uri=mongodb://localhost:27017 -c vendas_montadora --db examples --jsonArray db_data/vendas_montadora.json
```

Alternativamente é possível utilizar alguma ferramenta visual, como o [Compass](https://www.mongodb.com/try/download/compass)