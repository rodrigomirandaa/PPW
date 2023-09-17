//objeto carro
class Carro{
    //atributo cor
    constructor(tp,tpComb){
        this.tipo=tp //1-passeio 2-transporte 3-combate
        this.qtdeComb=100
        this.tipoComb=tpComb //1-gasolina 2-diesel 3-etanol
        this.ligado=false
    }
    //método info para printar infos do carro
    info(){
        console.log("**Olá, sou um novo carro**")
        console.log("Qtde Comb....:"+ this.qtdeComb)
        console.log("Tipo Comb....:"+ this.tipoComb)
        console.log("Ligado.......:"+ (this.ligado ? "Sim" : "Não"))
 
        if(this.tipo==1){
            console.log("Tipo Carro...: Passeio")
        }else if(this.tipo==2){
            console.log("Tipo Carro...: Transporte")
        }else{
            console.log("Tipo Carro...: Combate")
        }

    }
    //setter --> define um atributo
    set setLigado(t){
        this.ligado=t
    }
    get getLigado(){
        return this.ligado
    }
   
   //setter otimizado
   set setComb(v){
    if(v<0 || v>100){
        console.log("Valor invalido")
    }else{
        this.qtdeComb=v
        }  
    }
    //getter otimizado
    get getComb(){
        return this.gtdeComb
    }
}
//exportando classe pai
export default Carro

//atributos do objeto carro
let c1=new Carro(1,2)

//chamando a função info
c1.info()

