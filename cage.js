




// creates the first Nick Cage
var cageOne = {
	firstName:  "Nick",
	lastName: "Cage",
	age: 53,
	health:  "100",
	energy:  "100",
	str: 39,
	dead:  false,
	doDamage: function ()  {
	// gen random # for damage
	var damage = Math.floor(Math.random() *  cageOne.str + 1);
	// decides if other Nick Cage is dead
  if (damage >= cageTwo.health){
        cageTwo.dead = true;
        console.log("cageTwo has taken " + damage +" points and has died");
      } else {
        console.log("cageTwo takes " + damage + " points of damage and lives!");
    }

    cageTwo.health = (cageTwo.health - damage);
  }

}

var setHealth = function () {
	healthTotal = document.getElementById('health1').innerHTML = 100;
  return healthTotal - cageTwo.health;
	console.log(healthTotal);
};



// creates the second Nick Cage
var cageTwo = {
	firstName:  "Nick",
	lastName: "Cage",
	age: 53,
	health:  "100",
	energy:  "100",
	str: 39,
	dead:  false,
	doDamage: function ()  {
	// gen random # for damage
	var damage = Math.floor(Math.random() * cageTwo.str + 1);
	// decides if other Nick Cage is dead
  if (damage >= cageOne.health){
        cageOne.dead = true;
        console.log("CageOne has taken " + damage +" points and has died");
      } else {
        console.log("CageOne takes " + damage + " points of damage and lives!");
    }

    cageOne.health = (cageOne.health - damage);
  }
}

var cageOneAttack = function () {
	cageOne.doDamage();
};

var cageTwoAttack = function () {
	cageTwo.doDamage();
};
