const { comunicacaoDosAnimais } = require('../src/comunicacao.js')
const assert = require ('node:assert')

describe('Comunicação', () =>{
    it('Quando informado cachorro deve retornar au au', ()=> {
        const animal = 'cachorro'

        const comunicacao = comunicacaoDosAnimais(animal)

        assert.strictEqual(comunicacao,'au au')
    })
    it('Quando informar gato deve retornar miau', ()=>{
        const animal = 'gato'

        const comunicacao = comunicacaoDosAnimais(animal)

        assert.strictEqual(comunicacao, 'miau')
    }) 
})