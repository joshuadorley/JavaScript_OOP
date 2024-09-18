console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies) {
      this.name = name;
      this.pets = pets;
      this.residence = residence;
      this.hobbies = hobbies;
    }
  
    addHobby(hobby) {
      this.hobbies.push(hobby);
    }
  
    removeHobby(rmHobby) {
      this.hobbies = this.hobbies.filter((hobby) => hobby != rmHobby);
      let foundIdx = this.hobbies.indexOf(rmHobby);
      this.hobbies.splice(foundIdx, 1);
    }
  
    greeting() {
      console.log("Hello fellow person!");
    }
    
    toString() {
        return Object.entries(this).toString();
    }
  
  }
  

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
      super(name, pets, residence, hobbies);
      this.occupation = occupation;
    }
  
    greeting() {
      console.log("Hello, I am a coder!");
    }
  }
  

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let coder = new Coder(
    "Ben",
    0,
    "Birmingham",
    ["running", "diy", "reading"],
    "Full stack Web Developer"
);

coder.addHobby("fencing");

console.log(coder);

coder.removeHobby("diy");

console.log(coder);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(a, b = this.result) {
      this.result = a + b;
      return this.result;
    }
  
    subtract(a, b = this.result) {
      this.result = b - a;
      return this.result;
    }
  
    multiply(a, b = this.result) {
      this.result = a * b;
      return this.result;
    }
  
    divide(a, b = this.result) {
      if (a === 0) {
        console.log("Cannot divide by zero.");
        return this.result;
      }
      this.result = b / a;
      return this.result;
    }
  
    displayResult() {
      console.log(`Current result: ${this.result}`);
    }
  }
  
  // Test Calculator
  let calc = new Calculator();
  calc.add(10, 5);
  calc.displayResult();
  calc.subtract(3);
  calc.displayResult();
  calc.multiply(2);
  calc.displayResult();
  calc.divide(4);
  calc.displayResult();
  