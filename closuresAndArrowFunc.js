"use strict";
console.log("\n\n\nPart 2.");

let globalCount = 0;
//everything INSIDE has an access to all of the OUTSIDE of the scope
function createCounter(start) {
    let count = start;
    return function() {
        console.log("Counter:", count++, "Global counter:", ++globalCount);
    };
  }
  
  function createArrowCounter(start) {
    let count = start;
    return () => {
      console.log("Arrow Counter:", count++, "Global counter from arrow:", globalCount++);
    };
  }

  // const & let do not add things to global space
  const noPollution = (start) =>{
    let count = start;
    return () => {
      console.log("No pollution Counter:", count++, "Global counter from arrow:", globalCount++);
    };
  }

  try{
    const countTest = createCounter(100);
    console.log("countTest", countTest.count);//count in a local scope
    
  }catch(error){
    console.log(error.message);
    
  }

  createCounter(5)();
  createCounter()();
  const counter = createCounter(1);
  counter(); 
  counter(); 
  counter(); 
  console.log("\n\n");
  
  createArrowCounter(10)();
  createArrowCounter()();
  const arrowCounter = createArrowCounter(20);
  arrowCounter(); 
  arrowCounter(); 
  arrowCounter(); 
  console.log("\n\n");

  noPollution(50)();
  noPollution()();
  noPollution(60)();
  