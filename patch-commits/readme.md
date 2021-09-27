# Git patch
Arquivos de exemplo do post [Git patch: Compartilhamento de commits além do remote](https://dev.to/poveda/git-patch-compartilhamento-de-commits-alem-do-remote-3j88) e da sua continuação [Git apply: colocando os patch files em stage](https://dev.to/poveda/git-apply-colocando-os-patch-files-em-stage-db6).

Se quiser entender o que cada comando abaixo faz, acessa os posts ;)

## Criando o arquivo de patch
Vou mostrar duas formas de gerar o arquivo patch. Uma delas é utilizando a branch *carro_update* e a outra é utilizando a própria branch main.
Os arquivos que estão versionados na pasta deste readme são os arquivos utilizando a primeira abordagem.

### Utilizando a branch carrodb_update
Faça o checkout para a branch carrodb_update

```shell
git checkout carrodb_update
```
> Esta branch possui esta exatamente 2 commits a frente da branch main, então não existe a chance de conflito.

Agora basta rodar o comando

```shell
git format-patch -2 -o patch-commits-files/
```
ou 
```shell
git format-patch -2 -o patch-commits-files/ df79d0f5e5e53a05db9943a1b5dc9556ecd82713
```

Em ambos os casos serão gerados 2 arquivos a partir do último commit feito (o hash do segundo exemplo é o hash do último commit).

### Utilizando a main
Na mais o processo será semelhante ao processo anterior, porém vamos utilizar o hash do último commit da main

```shell
git format-patch -2 -o patch-commits-files/
```
ou 
```shell
git format-patch -2 -o patch-commits-files/ df01563b59300ab126469a834e185475eb516907
```

## Aplicando os arquivos patch na árvore
Com os arquivos criados, vamos adicionar os commits gerados na árvore de commits

### Arquivos gerados utilizando a branch carrodb_update
Este é o caso mais simples e direto, pois os arquivos já estão versionados aqui.

Faça checkout na branch main
```shell
git checkout main
```

Em seguida basta rodar o comando
```shell
git am patch-commits-files/000*.patch
```

Se quiser rodar de forma interativa basta adicionar a opção **-i**
```shell
git am -i patch-commits-files/000*.patch
```
Pronto! Commits adicionados à árvore

### Arquivos gerados utilizando a branch main
Por este método será necessário criar uma nova branch a partir de um commit anterior a main.

Faça checkout na branch main
```shell
git checkout main
```
Crie uma nova branch a partir do terceiro commit da árvore
```shell
git checkout -b new_branch 6a530ef5232c88c291939ab097ff25ee181cf0b0
```

Em seguida basta rodar o comando para adicionar os commits que não estão nessa branch.
```shell
git am patch-commits-files/000*.patch
```

Se quiser rodar de forma interativa basta adicionar a opção **-i**
```shell
git am -i patch-commits-files/000*.patch
```

---
## Utilizando o git apply
Esta parte entra no lugar do git am. No entanto, a parte de geração das branches para a aplicação dos arquivos continuam iguais
Outro ponto que continua igual é a [geração dos arquivos .patch](#criando-o-arquivo-de-patch).

Para adicionar as alterações dos arquivos de patch, rodar o comando:
```shell
git apply patch-commits-files/000*.patch
```

Se quiser somente verificar se as alterações dos patches podem ser adicionadas, rode o seginte comando:

```shell
git apply --check patch-commits-files/000*.patch
```
Para ver o erro do check, basta rodar os dois comandos acima na sequência