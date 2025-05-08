"use strict";
console.log("BEFORE FUNCTION DEFINITIONS\n");

check();

// Function declaration (hoisted), 
// Hoisting - before running code JS move to top of the file every element with type function
// var - hoist initialization of variable to top, but variable = undefined(var a = undefined)
function calculateArea(shape, value) {
  if (shape === "circle") return Math.PI * value**2;
  if (shape === "square") return value**2;
  return null;
}
//arguments

// Named function expression (NOT hoisted)
const calculatePerimeter = function(shape, value) {
  if (shape === "circle") return 2 * Math.PI * value;
  if (shape === "square") return 4 * value;
  return null;
};

// Higher-order function (hoisted, because function declarated)
function getCalculation(type) {
  if (type === "area") return calculateArea;
  if (type === "perimeter") return calculatePerimeter;
  return null;
}

console.log("\nAFTER FUNCTION DEFINITIONS");

check();

const calc = getCalculation("area");
console.log("Area after definitions:", calc("circle", 10));//or getCalculation(type)(shape, value)

console.log("Perimeter after definitions:", getCalculation("perimeter")("square", 10));

function check(){//hoisted
    try{
        console.log("typeof calculateArea:",      typeof calculateArea); // defined (hoisted)
    }catch(error)
    {
        console.error("Error before definitions(typeof):", error.message);
    }
    
    try{
        console.log("typeof calculatePerimeter:", typeof calculatePerimeter); // undefined (not hoisted)
    }catch(error)
    {
        console.error("Error before definitions(typeof):", error.message);
    }
    
    try{
        console.log("typeof getCalculation:",     typeof getCalculation); // defined (hoisted)
    }catch(error)
    {
        console.error("Error before definitions(typeof):", error.message);
    }
    
    try {
      console.log("getCalculation: " +getCalculation("area")("circle", 10)); 
    } catch (error) {
      console.error("Error before definitions:", error.message);
    }
}
