protoHorse.talk('"kliklak"');

let noisyHorse = Object.create(protoHorse);
noisyHorse.type = "noisy";
noisyHorse.color = "black";

noisyHorse.talk('"i-haaaAAAA!"');

let horseMaker = function(type, special){
  let horse = Object.create(protoHorse);
    horse.type = type;
    horse.special = special;
  	return horse;
};


let lousyHorse = horseMaker("lousy");
lousyHorse.talk('"Meeeh...!"');

let anotherLousyHorse = horseMaker("another lousy");
anotherLousyHorse.color = "grey";
anotherLousyHorse.talk('"Meeeh too...!"');

let specialHorse = horseMaker("special", `"it seems that it's a whistling horse"`);
specialHorse.talk('"Oh my, guess why I am soo special!"');
console.log(specialHorse.special);
/*

function makeHorse(type) {
  let rabbit = Object.create(protoRab);
  rabbit.type = type;
  return rabbit;
}

let rabbitConstructor = function(type){
  this.name = "rabbitous";
  this.color = type;

};

let illRab = makeRab(protoRab);
let whiteRab = new rabbitConstructor("White");

console.log(whiteRab, whiteRab.name, whiteRab.color);
console.log(Object.getPrototypeOf(protoRab));
console.log(illRab("hiiigh!"));
*/
