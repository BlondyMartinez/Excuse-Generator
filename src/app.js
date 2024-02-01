/* eslint-disable */
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = [" ate", " peed", " crushed", " broke"];
let what = [" my homework", " the keys", " the car"];
let when = [
  " before the class.",
  " right on time.",
  " when I finished.",
  " during my lunch.",
  " while I was praying."
];

function generateExcuse() {
  let excuse = "";

  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        excuse = who[Math.floor(Math.random() * 4)];
        break;
      case 1:
        excuse += action[Math.floor(Math.random() * 4)];
        break;
      case 2:
        excuse += what[Math.floor(Math.random() * 3)];
        break;
      case 3:
        excuse += when[Math.floor(Math.random() * 5)];
        break;
    }
  }

  document.getElementById("excuse").innerHTML = excuse;
}
window.onload = function() {
  generateExcuse();
};
