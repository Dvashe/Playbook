class Pokemon{
    constructor(Pokemon){
      this.Pokemon= Pokemon   
    }

    sayHello(){
       return console.log(`Mi pokemon ${this.Pokemon} te saluda!!!`)
    }
    sayMessage(message){
        return console.log(`Mi pokemon ${this.Pokemon} dice:` + message)
    }
}
module.exports = Pokemon;