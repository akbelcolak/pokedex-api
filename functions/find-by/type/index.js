const type = (pokeArray, type) => {
  if (pokeArray.length !== 0){
  // I filtered the type, but this one gives me only exmp. the type 'dragon' , if poke has also other types, funk does not give me the name of poke.
  // let myFilter= pokeArray.filter(pokemon => pokemon.type == type);
  let myFilter= pokeArray.filter(pokemon => pokemon.type.includes(type) );
  //console.log(myFilter);

  // I return each filterd pokemon with their name and number data
  let myMap = myFilter.map(e => {
    return { name: e.name, num: e.num };
  });
  return myMap;}
  //console.log (myMap);}
  else {return [];}
  /*  */
};

module.exports = type;
