const weakness = (pokeArray, type) => {
    //if (pokeArray.length !== 0){
        let myFilter= pokeArray.filter(i => i.weakness === type);
        console.log(myFilter);

        /*
        let myMap = myFilter.map(e => {
            return { name: e.name, num: e.num };
          });
          //return myMap;}
          console.log (myMap);}
          else {return [];}

        */
};

module.exports = weakness;
