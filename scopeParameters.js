"use strict";
console.log("\n\n\n Part 3.");


function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetUser();
greetUser("John");

//if uncoment, sayHiArrow take this.name = Dmytro
let name = "Dmytro";

const user = {
    name: "Doe",
    sayHi: function () {
        console.log(`regular Hi: my name is ${this.name}`);
    },
    //it uses this from the surrounding scope (where the arrow function was defined, not called).
    sayHiArrow: () => {
        console.log(`arrow Hi: my name is ${this.name}`);
        
    }
};

user.sayHi(); // Correct
user.sayHiArrow(); // Incorrect

// Scope differences: var(function-scoped or global-scoped - visible through blocks) vs let(block-scoped)
//“var” tolerates redeclarations
console.log("\nLoop variable scope:");
for (var i = 0; i < 3; i++) { }
console.log("var i after loop:", i); 

for (let j = 0; j < 3; j++) { }
try {
    console.log("let j after loop:", j); 
} catch (error) {
    console.error("let j after loop:", error.message);
}

//decorators
let a = {
    x:10,
    y: 15
}
let b = {
    x:100,
    y:120
}
function print() {
    console.log(this);
    console.log(`x= ${this.x}, y = ${this.y}`);
}

let print_a = print.bind(a);
print_a();

let print_b = print.bind(b);
print_b();