function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byCent = {};

ancestry.forEach(function(person){
  byCent[(Math.ceil(person.died/100))] = [];
});

ancestry.forEach(function(person){
  byCent[Math.ceil(person.died/100)].push(person.died - person.born);
});
    
for (x in byCent)
byCent[x] = average(byCent[x]);
     
console.log(byCent);


// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
