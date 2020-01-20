'use strict';

class Solider {

    training(){
        this.strength += this.trainingPoints
        console.log(`Strengh of this unit: ${this.strength}`)
    }

    transform(){
        let solider=false

        switch(this.type){
            case 'boobie':
                    console.log(`Transform : ${this.type} to: Archer`)
                    solider = new Archer() 
                break;
            case 'archer':
                console.log(`Transform : ${this.type} to: Gentlemen`)
                    solider = new Gentlemen() 
                break;
        }

        return solider
    }
}

class Boobie extends Solider {

    constructor(){
        super()
        this.strength = 5
        this.type = `boobie`
        this.trainingGold = 3
        this.trainingPoints = 10
        this.transformGold = 30
    }
}

class Archer extends Solider {

    constructor(){
        super()
        this.type = `archer`
        this.strength = 10
        this.trainingGold = 7
        this.trainingPoints = 20
        this.transformGold = 40
    }
}

class Gentlemen extends Solider {

    constructor(){
        super()
        this.type = `gentlemen`
        this.strength = 20
        this.trainingGold = 10
        this.trainingPoints = 30
    }
}

class Army {
  
    constructor(civilization) {

        this.civilization = civilization;
        this.soliders = []
        this.setSoliders()
        this.gold = 1000
    }

    getAmountOfSoliders() {

        let soliders = { boobies:0, archers:0, gentlemen:0 }
    
        switch (this.civilization){
            case 'chinos':
                    soliders.boobies = 2
                    soliders.archers = 25
                    soliders.gentlemen = 2
                break
    
            case 'ingleses':
                    soliders.boobies = 10
                    soliders.archers = 10
                    soliders.gentlemen = 10
                break
            
            case 'bizantinos':
                    soliders.boobies = 5
                    soliders.archers = 8
                    soliders.gentlemen = 15
                break
        }
    
        return soliders
    }

    setSoliders(){
        
        let squad = this.getAmountOfSoliders()
        
        for (let index = 0; index < squad.boobies; index++) {
            this.soliders.push(new Boobie());
            
        }

        for (let index = 0; index < squad.archers; index++) {
            this.soliders.push(new Archer());
            
        }

        for (let index = 0; index < squad.gentlemen; index++) {
            this.soliders.push(new Gentlemen());
            
        }
    }

    toTrain(index){
        
        let solider = this.soliders[index]

        if ( solider === undefined ) throw `Solider dont exist`
        if( this.gold - solider.trainingGold < 0 ) throw `Insufficient gold, requires ${solider.trainingGold}`

        this.gold -= solider.trainingGold
        solider.training()
    }

    toTransform(index){
        
        let solider = this.soliders[index]

        if ( solider === undefined ) throw `Solider dont exist`
        if ( solider.transformGold === undefined ) throw `${solider.type} Cannot Transform`
        if( this.gold - solider.transformGold < 0 ) throw `Insufficient gold, requires ${solider.transformGold}`

        this.gold -= solider.transformGold
        this.soliders[index] = solider.transform()
    }

    getPoints(){
        return this.soliders.reduce( (acc, val) =>  acc + val.strength , 0)
    }

    lostWar(){
        this.removeSolider(this.soliders.map( o => o.strength ).indexOf( Math.max.apply(Math, this.soliders.map( o =>  o.strength )) ))
        this.removeSolider(this.soliders.map( o => o.strength ).indexOf( Math.max.apply(Math, this.soliders.map( o =>  o.strength )) ))
    }

    winWar(){
        this.gold += 100
    }
 
    removeSolider(index){ 
        this.soliders.splice(index, 1)
    }

    war(object){
        
        let resultPoints = (this.getPoints() - object.getPoints() ) 
        
        if( resultPoints > 0){ //win
            this.winWar()
            object.lostWar()
        }else if( resultPoints < 0 ){ //lost
            object.winWar()
            this.lostWar()
        }else{ //same
            this.removeSolider(this, Math.round( Math.random() * (this.soliders.length - 0) + 0))
            this.removeSolider(object, Math.round( Math.random() * (army.soliders.length - 0) + 0))
        }
    }
}