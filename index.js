function handleClick(e) {
  //? loding the audio
  const crash = new Audio("sounds/crash.mp3");
  const kick = new Audio("sounds/kick-bass.mp3");
  const snare = new Audio("sounds/snare.mp3");
  const tom1 = new Audio("sounds/tom-1.mp3");
  const tom2 = new Audio("sounds/tom-2.mp3");
  const tom3 = new Audio("sounds/tom-3.mp3");
  const tom4 = new Audio("sounds/tom-4.mp3");
  //? mapping the keys with audio
  switch (e) {
    case "w":
      crash.play();
      break;

    case "a":
      kick.play();
      break;

    case "s":
      snare.play();
      break;

    case "d":
      tom1.play();
      break;

    case "j":
      tom2.play();
      break;

    case "k":
      tom3.play();
      break;

    case "l":
      tom4.play();
      break;

    default:
      null;
      break;
  }
}

//? animations
function buttonAnimation(whenPressed) {
  var activeButton = document.querySelector("." + whenPressed);
  const body = document.querySelector("body").classList;
  var colors = ["red", "blue", "yellow", "pink", "purple", "orange", "white"];
  const randomColors = colors[Math.floor(Math.random() * 6)];
  activeButton.classList.add("pressed");
  body.add(randomColors);
  setTimeout(function () {
    activeButton.classList.remove("pressed");
    body.remove(randomColors);
  }, 100);
}

//? mapping the funtion to buttons(mouse)
const butoms = document.querySelectorAll(".drum");
for (const e of butoms) {
  e.addEventListener("click", (e) => {
    const target = e.target.innerText;
    handleClick(target);
    buttonAnimation(target);
  });
}
//? mappind the function to keybord keys
document.querySelector("body").addEventListener("keydown", (e) => {
  const target = e.key;
  buttonAnimation(target);
  handleClick(target);
});
