alert("welcome you!");

var welcome = prompt(
  "are you here for the best french password generator online?"
);

if (welcome == "yes") {
  alert("Oui got you then...:D");
} else if (welcome !== "yes") {
  alert("psff who are you kidding, you would had left the page by now :P");
}

var joke = prompt("what did the patient tell the doctor?");
if (joke !== 1) {
  alert(
    "no! that was not the answer! horrible try by the way, not even close to funny, go google the joke"
  );
}

var info = confirm(
  "to best help you out here and find your best fit we need you to pass a test, not everybody can handle a french password generator...are you ready?"
);

var ques1 = prompt(
  "what does the french word chocolat translate to in english?"
);

if (ques1 == "chocolate") {
  alert(
    "you are worthy of our service, and don't forget to eat your sweets whenever you feel like having a little sugar rush :D"
  );
} else if (ques1 !== "chocolate") {
  alert("ok you definitely know something I don't know ");
}

alert(
  "good now i need you to think of either the number 9, 6 and or 1, just one of those, choose wisely and strongly, and repeat the number three times in your head before clicking ok, while taking three deep breathes... ready? go!"
);

var guess = prompt("was it 9?");
if (guess == "yes") {
  alert(
    "you are ready to not need a password generator, we suggest you translate your favorite word into french, and add a number between one and nine, if your lazy let us do the work for you with the most powerfull  random password generator online, and enjoy your petite chocolat!!"
  );
} else if (guess !== "yes") {
  alert(
    "who the chocolate do you think I am, a clarivoyant wizard, well no, now you have been capacitated to make your own password, because we've proven to you that we can't read your mind, good luck!"
  );
}

//DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//Generate event listen
generateEl.addEventListener("click", () => {
  const length = lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// Copy password to Clipboard
clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("password has been copied to the clipboard");
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  //1.Init pw var
  //2.Filter out unchecked types //3.Loop over lenght call generator function for each type //4.Add final pw to the pw var and return
  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  console.log("typesCount:", typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );

  console.log("typesArr:", typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      //console.log("funcName:", funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
//Generator functions
function getRandomLower() {
  const lowers = "abcdefghijklmnopqrstuvwxyz";
  return lowers[Math.floor(Math.random() * lowers.length)];
}

function getRandomUpper() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
}
function getRandomNumber() {
  const number = "1234567890";
  return number[Math.floor(Math.random() * number.length)];
}
function getRandomSymbol() {
  const symbol = "!@#$%^&*()/?>.<'";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
//console.log(getRandomLower());
//console.log(getRandomUpper());
//console.log(getRandomNumber());
//console.log(getRandomSymbol());
