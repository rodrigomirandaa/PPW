//objeto carro
class Carro{
    //memoria alocada no sistema, padrão
    static alerta = false
    //atributo cor
    constructor(marca,modelo,cor){
        this.cor=cor
        this.marca=marca
        this.modelo=modelo
        this.km=0
        this.comb=5
        this.ligado=false
    }
    //método info para printar infos do carro
    info(){
        console.log("**Olá, sou um novo carro**")
        console.log("Marca........:" + this.marca)
        console.log("Modelo.......:" + this.modelo)
        console.log("Cor..........:" + this.cor)
        console.log("KM...........:"+ this.km)
        console.log("Combustivel..:"+ this.comb)
        //console.log("Ligado.......:"+ this.ligado)
        console.log("Ligado.......:"+ (this.ligado ? "Sim" : "Não"))
        console.log("Alerta.......:"+ (Carro.alerta ? "Sim" : "Não"))


    }
    //setter --> define um atributo
    ligar(){
        this.ligado=true
    }
    desligar(){
        this.desligado=false
    }
   //setter otimizado
   set setComb(v){
    if(v<0 || v>100){
        console.log("Valor invalido")
    }else{
        this.comb=v
        console.log("Combustivel alterado, valor atual: " + this.comb)
    }  
    }
    //getter --> obter um valor do atributo
    getComb(){
        return this.comb
    }
    //getter otimizado
    get getComb(){
        return this.comb
    }
    //setter com static
    set setAlerta(t){
        Carro.alerta = t 
    }
}

//atributos do objeto carro
let c1=new Carro("Fiat","Palio","Prata")
let c2=new Carro("VW", "Golf", "Preto")
//ligando o carro 1 pelo setter
c1.ligar()
//"enchendo" o tanque do carro 1 pelo setter otimizado
c1.setComb=10
//usando a função getcomb para mostrar uma info
console.log(c1.getComb)
//chamando a função info
c1.info()
c2.info()
//setando a variavel false na variavel alerta static; vale para todos os objetos dentro da classe
//forma burra de fazer: c1.setAlerta=false
//forma inteligente de fazer
Carro.alerta=false