// Crie um classe Carro com marca, cor, Km
// veja quanto ele gasta em dinheiro rodando 70km 


class Carro{
    marca;
    cor;
    gastoMedioPorkm;

    constructor(marca,cor,gastoMedioPorkm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorkm = gastoMedioPorkm;
    }

    calcularGastoDePercursor(distaciaEmKm,precoCombustivel){
        return distaciaEmKm * this.gastoMedioPorkm * precoCombustivel;
    }
}

let uno = new Carro('Fiat', 'Prata', 1/12);
unoGasto = uno.calcularGastoDePercursor(70, 5)
console.log(` Com o Uno eu gasto de gasolina R$ ${unoGasto} em 70km`)

let honda = new Carro('Honda', 'preto', 1/8);
hondaGasto = honda.calcularGastoDePercursor(70, 5)
console.log(` Com o Honda eu gasto de gasolina R$ ${hondaGasto} em 70km`)
