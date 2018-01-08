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

function prepend(valueE, list){
  listN = {value: valueE, rest: list};
  return listN;
}

function nth(list, pos){
 var arr = [];
  for (var node = list; node; node = node.rest){ 
  	arr.push(node.value);
	list = arr[pos];  
  }
  return list;
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(100, prepend(200, null)));
// → {value: 100, rest: {value: 200, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 30


