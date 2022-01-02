let result = document.getElementById("inputCurrent")
let operation = ["*", "-", "+", "÷",]

let calculate=(number)=>{

  if (result.innerHTML == 0) {
    result.innerHTML = ""
  }
  if (result.innerText.length >= 8) {
    return;
  }
  result.innerText +=number;
}

function clearInput() {
  result.innerHTML = 0;
}

function processEnd() {
  result.innerText = eval(result.innerHTML)
}