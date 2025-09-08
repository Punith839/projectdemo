function greetUser() {
  let name = document.getElementById("username").value;
  document.getElementById("title").innerText = "Hello, " + name + "!";
}

function changeBG() {
  document.body.style.backgroundColor = "#110ddee4";
}

function printNumbers() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  document.getElementById("output").innerText = output;
}

function toggleMessage() {
  let msg = document.getElementById("message");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
}
