// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

// in pokeData there are pokemon objects.
// in the objects there are properties as key:value pair,
// properties as arrays and properties as objects.
// should I loop through all values include the values inside the arrays and objects?

const value = (pokeArray, value) => {
  pokeArray.forEach(poke => {
      const res = [];
      const pokemon = {};
      if (Object.values(poke).includes(value)) {
          pokemon.name = poke.name;
          pokemon.num = poke.num;
          res.push(pokemon);
          //return pokemon;
          console.log(pokemon);
      } else {
          return [];
      }
  })

};

module.exports = value;

/* filter trys

const myValuesArray = pokeArray.map(i => Object.values(i));
let myFilter = pokeArray.filter(i => i[myValue] == value);


if (pokeArray.length !== 0) {
    let myFilter = pokeArray.filter(i => i[0] == value);
    // i return each filterd pokemon with their name and number data
    let myMap = myFilter.map(e => {
      return { name: e.name, num: e.num };
    });
    //return myMap;
    console.log(myMap);
  }
  else {
    return [];
  }
*/