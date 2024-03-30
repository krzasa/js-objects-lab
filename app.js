const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Easy"

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

game.party.push(pokemon[0])

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push(pokemon[36])
game.party.push(pokemon[62])
game.party.push(pokemon[78])

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/

game.party.sort((firstItem, secondItem)=> secondItem.hp - firstItem.hp)

   
/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/


for (let key in game.gyms){  //use for to access a nested obejects value  // for each gym 
  
    if (game.gyms[key].difficulty <3) { // for each gym, go to difficulty AND if it's below 3 
      game.gyms[key].completed =true  // change the completed property to true
        
    }
}
/*
Exercise 8
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 

Solve Exercise 8 here:
*/


game.party.splice(1,1, pokemon[1])


/*
Exercise 9
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 9 here:
*/


for (let key in game.party){  //use for to access a nested obejects value  // for each party 
  
      // console.log(game.party[key].name);
  }

  //this code prints out all the party member names


/*
Exercise 10
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 10 here:
*/

for (let key in pokemon){  //use for to access a nested obejects value  // for each gym 
  
  if (pokemon[key].starter ===true) { // for each pokemon, check if it's a starter
    // console.log( pokemon[key].name);  log the name
      
  }
}


/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:
*/

 //pokemon[110] desired pokemon Rhyhorn  from data  
 
game.catchPokemon = function(pokemonObj) { // created a method with a function declaration, function takes a pokemonObj that will be providing a desired pokemon

  game.party.push( pokemonObj) //adds the desired pokemon to the party
}; 

game.catchPokemon(pokemon[110]) //calls the method with the desired pokemon which will go to the function as the pokemonObj

// review this exercise with Matt or Nabila to see if this is the correct way to do it 


/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/

// pokemon[65] machop
game.catchPokemon = function(pokemonObj) { // editing the previous method to decrease the pokeball for every pokemon caught

  game.party.push( pokemonObj) //adds the desired pokemon to the party
  game.items[1].quantity -= 1 // decreases the pokeball count 
  
}; 
game.catchPokemon(pokemon[65])

/*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 13 here:
*/

for (let key in game.gyms){  //use for to access a nested obejects value  // for each gym 
  
  if (game.gyms[key].difficulty <6) { // for each gym, go to difficulty AND if it's below 6 
    game.gyms[key].completed =true  // change the completed property to true
      
  }
}

/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/

//game.gymStatus = {}
tally = {complete:  0, incomplete: 0} 

game.gymStatus = function() { 
  
  for (let key in game.gyms){  //use for to access a nested obejects value  // for each gym 
  
    if (game.gyms[key].completed === true) { // for each gym, go to difficulty AND if it's below 6 
      tally.complete +=1
        
    } else {
      tally.incomplete +=1
    }
    
  }
 
  }
 // game.gymStatus() had to comment out for next exercise that makes me complete gyms 

/*
Exercise 15
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 15 here:
*/

let partTal = 0

game.partyCount = function() { 
  
  for (let key in game.party){  //use for to access a nested obejects value  // for each party member 
  
        partTal += 1
    
  }
 
  }
  game.partyCount()

  /*
Exercise 16
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 16 here:
*/
for (let key in game.gyms){  //use for to access a nested obejects value  // for each gym 
  
  if (game.gyms[key].difficulty <8) { // for each gym, go to difficulty AND if it's below 6 
    game.gyms[key].completed =true  // change the completed property to true
      
  }
}
game.gymStatus() // updating the gym status 

/*
Exercise 17
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 17 here:
*/
console.log(game) // keep this in the bottom for Exercise 17


console.log(game.items[1].quantity +" pokeballs left"); // logs the amount of pokeballs
console.log( "Gym stats: "+ tally.complete +" complete, "+ tally.incomplete +" to go"); // logs gym progress
console.log("I have "+ partTal +" pokemon in my party.") // logs how many pokemon I have

  // console.dir(pokemon, { maxArrayLength: null })