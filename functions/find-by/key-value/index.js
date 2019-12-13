// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {
    if(pokeArray.length !== 0){
        // I filter pokemons with given key and value
        let myFilter = pokeArray.filter(i => i[key] == value);
      
        // i return each filterd pokemon with their name and number data
        let myMap = myFilter.map( e => {
             return {'name': e.name, 'num': e.num};
            
          });
          return myMap;}
          else {return [];}
      };


module.exports = keyValue;
