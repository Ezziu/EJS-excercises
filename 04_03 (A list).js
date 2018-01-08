function arrayToList(array){
   var list = null;
   for (i = array.length-1; i >= 0; i--){
     list = {value: array[i], rest: list}; 
  }
  return list;
}

console.log(typeof list);

function listToArray(list){
  var arr = [];
  for (var node = list; node; node = node.rest){ 
  	arr.push(node.value);
  }
  return arr;
}  

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
