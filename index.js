number = 10 ;

function add(number) {
  return (number += 5);
}
number = 10;

function subtract() {
  return (number -= 5);
}
number = 10;

function multiply() {
  return (number *= 5);
}
number = 10;

function divide() {
  return (number += 5);
} 

function add(a,b){
    return (a +b);
}

function subtract(a,b){
    return (a-b);
}


function multiply(a ,b) {
  return (a*b);
}


function divide(a,b) {
  return ( a/b);
} 
function decrement(n)  {
    return n -= 1;

}
function increment(n)  {
    return n += 1;

}

function makeInt(n){
    { 
        var parsed = parseInt(n);
        if (isNaN(parsed)) { return n; }
        return parsed * 100;
      }
}
function preserveDecimal(n) {
    return parseFloat(n) * 2.0 * Math.PI;
  }
  function makeInt(n){
    parseInt("nonsense!", 10);
  }      
    
      
