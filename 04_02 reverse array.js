function reverseArray (array) {
var rarr = [];
  for (var i = 0; i < array.length; i++)
   rarr.unshift(array[i]);
  return rarr;
}

var arrayValue = [1, 2, 3, 4, 5, 6];
console.log(arrayValue.slice(1,4));

function reverseArrayInPlace(argument){
  var leng = argument.length;
  for (var i = 0; i < leng; i++){
	   argument.push(leng-i);
    argument.shift(argument.slice[0,leng]);}
 }

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [6, 5, 4, 3, 2, 1]
