let button = document.getElementById("generate-btn");
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let firstCopyBtn = document.getElementById("copy-one");
let secondCopyBtn = document.getElementById("copy-two");

let characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  ",",
  ".",
  "?",
  "/",
  "|",
  "~",
];
button.addEventListener("click", () => {
  let password = generatePassword();
  passwordOne.textContent = password;
  generateSecondPassword();
});
firstCopyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(passwordOne.textContent).then(()=>{
        alert("Copied to clipboard")
    })
})

secondCopyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(passwordTwo.textContent).then(()=>{
        alert("Copied to clipboard")
    })
})

function generatePassword() {
  let password = "";
  for (let i = 0; i < 15; i++) {
    let random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }
  return password;
}
function generateSecondPassword() {
  let password = "";
  for (let i = 0; i < 15; i++) {
    let random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }
  passwordTwo.textContent = password;
}
