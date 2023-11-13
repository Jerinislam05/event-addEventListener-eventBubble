// option1: directly set on the HTML element
// <button onclick="console.log(65);">click</button>

// Option2: add onclick function on the HTML element
/* <button onclick="makeRed()">make red</button> */
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option3:
const makeBlueBtn = document.getElementById("make-blue");
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// option3: another
const purpleBtn = document.getElementById("make-purple");
purpleBtn.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option4:
const pinkBtn = document.getElementById("make-pink");
pinkBtn.addEventListener("click", makePink);
function makePink() {
  document.body.style.background = "pink";
}

// option4: another
const greenBtn = document.getElementById("make-green");
greenBtn.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option4: final(IMPORTANT)
document.getElementById("make-golden").addEventListener("click", function () {
  document.body.style.backgroundColor = "gold";
});
