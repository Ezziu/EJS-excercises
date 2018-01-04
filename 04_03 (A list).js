
function arrayToList(array){
  var listrest = null;
  for (var i = array.length-1; i >= 0; i--){
    //list.value = array[i-1];
  listrest = {value: array[i], rest: listrest}; 
    //listrest = list.rest;
  }
   return listrest;
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
