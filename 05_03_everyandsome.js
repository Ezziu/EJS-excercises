var every = function(array, action){
  for (i in array){
      if (!action(array[i]))
        return false;
      };
    return true;
    };

var some = function(array, action){
  for (i in array){
      if (action(array[i]))
        return true;
      };
   return false;
    };


      //console.log(isNaN(NaN));

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
