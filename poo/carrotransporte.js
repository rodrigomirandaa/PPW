import Carro from "./carro.js"

class CarroTransporte extends Carro{
    constructor(){
        super(2,2)
    }
}
let c2=new CarroTransporte()
c2.info()