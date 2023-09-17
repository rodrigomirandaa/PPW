import Carro from "./carro.js"

class CarroCombate extends Carro{
   //acessando constructor da classe pai Carro
    constructor(potTiro){
    super(3,2)
    this.tiros=1000
    this.potTiro=potTiro
    this.blindagem=100
    }
    info(){
        super.info()
        console.log("Qtde tiros...:"+ this.tiros)
        console.log("Pot tiros....:"+ this.potTiro)
        console.log("Blindagem....:"+ this.blindagem)
    }

}

let c2=new CarroCombate(100)
c2.info()
