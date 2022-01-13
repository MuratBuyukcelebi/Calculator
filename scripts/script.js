let result = document.getElementById("inputCurrent")
let operation = ["*", "-", "+", "/",]

let calculate=(number)=>{
  if (result.innerHTML == 0) {
    result.innerHTML = ""
  }
  if (result.innerText.length >= 8) {
    return;
  }
  result.innerText +=number;
}

let oper=(number)=>{
  if (result.innerHTML >= 1) {
    for(let i = 3; i < operation.length; i++) {
      result.innerHTML += number;
    }
  }
}

function reverseNum() {
  // incomplete code
 // result.innerHTML = result.innerHTML * -1
}
function clearInput() {
  result.innerHTML = 0;
}
function processEnd() {
  result.innerText = eval(result.innerHTML)
}

