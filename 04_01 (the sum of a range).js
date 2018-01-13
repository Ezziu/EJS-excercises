function range(start, end, step) {
		var arr = [];
		if (step == undefined) step = 1;
	if (step > 0) {
  	    for (var i = start; i <= end; i+=step)
    		arr.push(i);
    			}
	else  {
   		for (var i = start; i >= end; i+=step)
   			arr.push(i);
   	}
  	return arr;
}


function sum(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++)
    sum += array[i];
  return sum; 
}
console.log(range(2,5));
// [2, 3, 4, 5]
console.log(range(2,5,2));
// [2, 4]
console.log(range(10,1,-1));
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(sum(range(10,1,-1)));
// 55
console.log(range(6,2,-1));
// [6, 5, 4, 3, 2]
console.log(range(2,5,-1));
// []
