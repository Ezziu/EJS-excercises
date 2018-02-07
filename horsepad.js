//PROTOHORSE

let protoHorse = {
  talk(noise){
    console.log(`${this.type} ${this.color} horse makes ${noise}`)
  },
  type: "proto",
  color: "brown",
};

protoHorse.talk('"klik-klak"');

//ANGRY METHOD HORSE

function talk(noise){
  console.log (`${this.type} ${this.color} horse makes '${noise}'`);
};
let angryHorse = {type: "angry", color: "crazy", talk}
angryHorse.talk("I'm gonna' kick!!!");

//NOISY MANUALLY ADDRED

let noisyHorse = Object.create(protoHorse);
noisyHorse.type = "noisy";
noisyHorse.color = "black";

noisyHorse.talk('"i-haaaAAAA!"');

//CREATOR HORSEMAKER + SPECIAL

let horseMaker = function(type, special){
  let horse = Object.create(protoHorse);
    horse.type = type;
    horse.special = special;
  	return horse;
};

//PROTOTYPE EDITED

let newHorse = horseMaker("new");
console.log(newHorse, newHorse.color);

protoHorse.prance = function(act){
  console.log(`${this.type} horse is ${act}ing like mad!`);
} 

newHorse.prance("pranc");

// CLASS

class Horse{
  constructor(type){
  this.type = type};

  walk(how) {
     console.log(`${this.type} horse walks really ${how}`)
  };
};

let classyHorse = new Horse("classy");
classyHorse.walk("classy'ish");

let calledHorse = horseMaker("called");
talk.call(calledHorse, "What again?");

let lousyHorse = horseMaker("lousy");
lousyHorse.talk('"Meeeh...!"');

let specialHorse = horseMaker("special", `"it seems that it's a whistling horse"`);
specialHorse.talk('"Oh my, guess why I am soo special!"');
console.log(specialHorse.special);

let ordinaryHorse = horseMaker("ordinary", `"there's nothing special about this particular horse"`);
ordinaryHorse.talk(`"klik-klak"- "Yup, I'm just another horse" - he adds`);
console.log(ordinaryHorse.special);
ordinaryHorse.prance("jump");
