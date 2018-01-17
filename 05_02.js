var byName = {};
  
ancestry.forEach(function(person) {
    byName[person.name] = person;
  });

var agedifs = [];
  
ancestry.forEach(function(person){
  if (byName[person.mother] != null)
    agedifs.push(person.born - byName[person.mother].born);
});

console.log(average(agedifs));
  // → 31.2
