# Mongoexport
Arquivos de exemplo do post [Exportando campos específicos com mongoexport Exportando campos específicos com mongoexport](https://dev.to/poveda/exportando-dados-filtrados-em-mais-de-uma-collection-431c)](https://dev.to/poveda/exportando-dados-filtrados-em-mais-de-uma-collection-431c).

Se quiser entender o que cada comando abaixo faz, acessa o post ;)

Precisa saber como construir o ambiente de testes para os exemplos? No [readme base deste repositório](../Readme.md) tem a explicação

## Cenário apresentado
Exportar todas as vendas de uma montadora para um arquivo .csv ou .json
Os dados estão segregados em duas collections distintas: vendas_concessionaria e venda_montadora

## Importando o script de exportação direto no comando

```sh
mongosh mongodb://localhost:27017/examples ~/export_data_multiple_databases/obter_vendas.js 
```

## Carregando o script dentro do contexto do mongosh

Iniciando a sessão do mongosh
```sh
mongosh mongodb://localhost:27017/examples
```
Load do arquivo de script
```sh
load('export_data_multiple_databases/obter_vendas.js')
```
> O caminho utilizado deve ser o caminho absoluto para o arquivo, ou o arquivo deve estar dentro da pasta da qual o mongosh foi chamado


## Utilizando a opção --eval

```sh
mongosh mongodb://localhost:27017/examples --eval="load('export_data_multiple_databases/obter_massa_dados.js');"
```

## Adicionando o --quiet aos comandos
O --quiet impede que as informações referentes ao mongodb sejam impressas no console, mostrando somente o resultado do script executado

Importando o script direto no comando
```sh
mongosh mongodb://localhost:27017/examples --quiet ~/export_data_multiple_databases/obter_vendas.js 
```

Utilizando a opção com --eval
```sh
mongosh mongodb://localhost:27017/examples --quiet --eval="load('export_data_multiple_databases/obter_massa_dados.js');"
```

## Finalmente exportando o resultado do script para um arquivo
Importando o script direto no comando
```sh
mongosh mongodb://localhost:27017/examples --quiet ~/export_data_multiple_databases/obter_vendas.js > resultado_do_script.json
```

Utilizando a opção com --eval
```sh
mongosh mongodb://localhost:27017/examples --quiet --eval="load('export_data_multiple_databases/obter_massa_dados.js');" > resultado_do_script.json
```