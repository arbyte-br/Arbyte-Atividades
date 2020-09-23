const {
    soma,
    multiplica,
    somaMultiplica,
    exponenciacao,
    menor,
    inteiro
} = require('../index')

test('1 - Testando jest', () => {
    expect(1).toBe(1)
})

test('2 - Testando função soma()', () => {
    expect(soma(1,2,3)).toBe(6)
})

describe('3 - Testando função multiplica()', () =>{
    it('Validando função com 2 parametros', () => {
        expect(multiplica(2,2)).toBe(4)
    })

    it('Validando função passando apenas 1 paramentro', () => {
        expect(multiplica(2)).toBe(2)
    })
    
    it('Validando função passando 0 como parametro', () => {
        expect(multiplica(0,2)).toBe(0)
    })
})

test('4 - Testando função que recebe três números', () => {
    expect(somaMultiplica(2,4,2)).toBe(12)
})

test('5 - Testando função de exponenciação', () => {
    expect(exponenciacao(5,2)).toBe(25)
})

test('6 - Testando função que retorna o menor número de um array', () => {
    expect(menor(4,3,5,6,2)).toBe(2)
})

describe('7 - Testando função que retorna número inteiro mais próximo', () => {
    
    it('Testando 3.4 retorna 3', ()=> {
        expect(inteiro(3.4)).toBe(3)
    })

    it('Testando 3.5 retorna 4', () => {
        expect(inteiro(3.5)).toBe(4)
    })
    
})
