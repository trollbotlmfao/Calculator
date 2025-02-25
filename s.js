



document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault(); 
  
  let firstNumber = parseFloat(document.getElementById("fNum").value)    
  let secondNumber = parseFloat(document.getElementById("sNum").value);
  let operator = document.getElementById("op").value;
  let output = document.getElementById("output");


  let res = 0;
  if(operator === "multiply") {
    res = firstNumber*secondNumber;


  }
  if(operator === "divide") {
    res = firstNumber/secondNumber;


  }
  if(operator === "add") {
    res = firstNumber + secondNumber;
    

  }
  if(operator === "subtract") {
     res = firstNumber-secondNumber;


  }

  output.value = res.toString();
});
