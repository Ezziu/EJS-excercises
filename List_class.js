class List {
 constructor(value, rest){
    this.value = value,
    this.rest = rest;
  }; 
  
  toArray(list){
    let arr = [];
      for (let list = this; list != List.empty; list = list.rest){ 
  	    arr.push(list.value);
      }
    return arr;
  } 
   
   static fromArray(array){
     let list = List.empty;
       for (let i = array.length-1; i >= 0; i--){
         list = new List(array[i], list);
        };
     return list;
  }
    get length(){
    let x = 0;
    for (let list = this; list != List.empty; list = list.rest){
      x++;
    }  
    return x;
  }
}
List.empty = new List(undefined, undefined);

console.log(List.fromArray([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(List.fromArray([10, 20, 30]).toArray());
// → [10, 20, 30]
console.log(new List(2,{value: 2, rest: List.empty}).length);
// → 1
