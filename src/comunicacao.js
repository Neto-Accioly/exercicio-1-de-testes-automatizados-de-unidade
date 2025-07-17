function comunicacaoDosAnimais (animal){
    if (animal == 'cachorro') {
        return 'au au'
    }
    else if (animal == 'gato') {
        return 'miau'
    }
    else {
        'Informe gato ou cachorro'
    }
}

module.exports = {
    comunicacaoDosAnimais
}