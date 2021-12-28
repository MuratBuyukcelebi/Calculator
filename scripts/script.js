let result = document.getElementById("inputCurrent")

let calculate=(number)=>{

  if (result.innerHTML == 0) {
    result.innerHTML = ""
  }
  result.innerHTML +=number;
}

function clear() {
  result.innerHTML = 0
}