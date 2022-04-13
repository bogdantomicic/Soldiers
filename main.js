function CreateSoldier() {
    this.demage = Math.floor(Math.random()*(500-300) + 300); 
    this.health = Math.floor(Math.random()*(1000-800) + 800);
    this.weapon = ["sniper","Knife","Gun"][Math.floor(Math.random()*3)];
    this.attack = function() {
        console.log("Attack");
    }
    this.info = function () {
        return "Demage: " +this.demage+ " Health: " +this.health+ " Weapon: " +this.weapon;
    } 
}

var s1 = new CreateSoldier(300,1000);
var s2 = new CreateSoldier(280,10100);

console.log(s1);