# Mongoexport
Arquivos de exemplo do post [Exportando campos específicos com mongoexport Exportando campos específicos com mongoexport](https://dev.to/poveda/exportando-campos-especificos-com-mongoexport-1922).

Se quiser entender o que cada comando abaixo faz, acessa o post ;)

Precisa saber como construir o ambiente de testes para os exemplos? No [readme base deste repositório](../Readme.md) tem a explicação

## Executando o comando de export com --fields
Retorna o ano de fabricação, qual a fabricante e qual é o tamanho do motor em litros de todos os carros do modelo Celica da Toyota (condição do filtro dentro do arquivo filter2.json)
*Observação*
> o arquivo [filter2.json](filter2.json) serve somente para deixar o comando mais limpo e com foco nos parâmetros abordados no post

```sh
mongoexport.exe mongodb://localhost:27017 --db example -c cars --queryFile="~/filter2.json" --fields="ano,fabricante,motorizacao.litros" --csv #export em csv
```

```sh
mongoexport.exe mongodb://localhost:27017 --db example -c cars --queryFile="~/filter2.json" --fields="ano,fabricante,motorizacao.litros" #export em json
```
> Nesta execução o campo _id(pk) e todos os campos do subdocumento são retornados, mesmo que estes não tenham sido adicionados a lista de campos a serem  exportados.

## Executando o comando de export com --fieldFile
Este parâmetro só funciona para as exportações do tipo **--csv**

Idem a execução acima, porém os campos desejados estão dentro do arquivo [fields_to_export](fields_to_export.txt)

```sh
mongoexport.exe mongodb://localhost:27017 --db example -c cars --queryFile="~/filter2.json" --fieldFile="~/fields_to_export.txt" --csv
```