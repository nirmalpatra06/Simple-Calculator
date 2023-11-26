let input = document.getElementById("input");

let buttons = document.querySelectorAll("button");

let output = 0;

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      output = eval(output);
      input.value = output;
    } else if (e.target.innerHTML == "AC") {
      output = "";
      input.value = output;
    } else if (e.target.innerHTML == "DEL") {
      output = output.substring(0, output.length - 1);
      input.value = output;
    } else if (e.target.innerHTML == "%" && output == 0) {
      output = "Error";
      input.value = output;
    } else if (e.target.innerHTML == "/" && output == 0) {
      output = "Error";
      input.value = output;
    } else if (e.target.innerHTML == "*" && output == 0) {
      output = "Error";
      input.value = output;
    } else if (e.target.innerHTML == "-" && output == 0) {
      output = "Error";
      input.value = output;
    } else if (e.target.innerHTML == "+" && output == 0) {
      output = "Error";
      input.value = output;
    } else {
      output += e.target.innerHTML;
      input.value = output;
    }
  });
});
