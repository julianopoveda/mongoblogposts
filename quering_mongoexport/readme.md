# Mongoexport
Arquivos de exemplo do post [Exportando dados filtrados com mongoexport](https://dev.to/poveda/exportando-dados-filtrados-com-mongoexport-1k36).

Se quiser entender o que cada comando abaixo faz, acessa o post ;)

Precisa saber como construir o ambiente de testes para os exemplos? No [readme base deste repositório](../Readme.md) tem a explicação

## Executando o comando de export com --query
Retorna todos os carros que são da fabricante Dodge e com ano superior a 2011

```sh
mongoexport mongodb://localhost:27017 --db=example -c=cars --query='{ "fabricante":"Dodge", "ano":{ "$gt": 2011 } }'
```

## Executando o comando de export com --queryFile
Retorna todos os carros utilizando o filtro que está dentro do arquivo [filter.json](filter.json).
```sh
mongoexport mongodb://localhost:27017 --db=example -c=cars --queryFile="filtros.json"
```