//New Try at the Password Generator

// (1) First assign Global Variables and placeholders.
var a = "password";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symb = "!@#$%^&*()";

//(2) Variable Id selections for easy handling.
var range = document.getElementById("lengthRange");
var numbYes = document.getElementById("numbers");
var upperYes = document.getElementById("upper");
var lowerYes = document.getElementById("lower");
var symbol = document.getElementById("symbol");
var getPass = document.getElementById("generator");
var finalPass = document.getElementById("textarea");

var copy = document.getElementById("copypass");

//Variables Assigned

getPass.addEventListener("click", function(e) {
  var charac = a;
  numbYes.checked ? (charac += number) : "";
  upperYes.checked ? (charac += upperCase) : "";
  lowerYes.checked ? (charac += lowerCase) : "";
  symbol.checked ? (charac += symb) : "";

  finalPass.value = randomPassword(range.value, charac);
});

//PART TWO

//Create Operational Functions
//(1) This passwrod will take two parameters
function randomPassword(len, charac) {
  // inside ww'll have an internal variable
  var pw = "";
  // and a for loop to run trough
  for (var i = 0; i < len; i++) {
    pw += charac.charAt(Math.floor(Math.random() * charac.length));
  }
  return pw;
}

copy.addEventListener("click", async event => {
  if (!navigator.clipboard) {
    // Clipboard API not available
    return;
  }
  const text = finalPass.value;
  try {
    await navigator.clipboard.writeText(text);
    event.target.textContent = "Copied to clipboard";
  } catch (err) {
    console.error("Failed to copy!", err);
  }
});
