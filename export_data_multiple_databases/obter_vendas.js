var minDataVenda = new ISODate("2021-08-01");
var maxDataVenda = new ISODate("2021-09-01");

function ObterVendasPorPeriodo(collectionName, dataInicio, dataFim) {
    return db.getCollection(collectionName).find({
        $and: [
            { 'datavenda': { $gte: dataInicio } },
            { 'datavenda': { $lt: dataFim } }
        ]
    }, {
        _id: 0,
        "fabricante": 1,
        "modelo": 1,
        "ano": 1,
        "preco": 1,
        "datavenda": 1,
        "collectionName": { $literal: collectionName }
    })
}

function printAsJSON(vendas_imprimir) {
    print("[");
    for (var i = 0; i < vendas_imprimir.length; i++) {
        print(vendas_imprimir[i]);
        if (i < vendas_imprimir.length - 1)
            print(',');
    }
    print("]");
}

function printAsCSV(vendas_imprimir) {    
    for (var i = 0; i < vendas_imprimir.length; i++) {
        var venda = vendas_imprimir[i]
        print(`${venda.fabricante},${venda.modelo},${venda.ano},${venda.datavenda.toISOString()},${venda.preco},${venda.collectionName}`);
    }    
}

var collections = [
    "vendas_concessionaria",
    "vendas_montadora"
]

var vendas = [];
for (collectionName of collections) {
    var results = ObterVendasPorPeriodo(collectionName, minDataVenda, maxDataVenda);
    while (results.hasNext())
        vendas.push(results.next());
}

printAsJSON(vendas); //Para imprimir em csv, utilize a função printAsCSV