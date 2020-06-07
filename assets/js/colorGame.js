let numberOfSquares = 6;
// let colors = generateRandomColors(numberOfSquares);
let colors = [];
let pickedColor;
// let pickedColor = pickColor();

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");

let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");

// let easyBtn = document.getElementById("easyBtn");
// let hardBtn = document.getElementById("hardBtn");

let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModes();
  setUpSquares();
  reset();
}

function setUpModes() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      //modes eventListener
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      this.textContent == "Medium"
        ? (numberOfSquares = 6)
        : (numberOfSquares = 3); //ternary: if med then num is 6, or else it is 3
      if (this.textContent == "Hard") {
        numberOfSquares = 9;
      }
      reset();
    });
  }
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add initial colors to square
    //   squares[i].style.backgroundColor = colors[i];

    //add clicked listeners to square
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;
      console.log(clickedColor);
      if (clickedColor === pickedColor) {
        // alert("correct")
        changeColors(clickedColor); //pickedColor also works
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

// easyBtn.addEventListener("click", function () {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");

//   numberOfSquares = 3;
//   colors = generateRandomColors(numberOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener("click", function () {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numberOfSquares = 6;
//   colors = generateRandomColors(numberOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

function reset() {
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block"; //this shows all the squares
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none"; //hides the squares if the color array ends
    }
  }

  h1.style.backgroundColor = "steelblue";
}

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
  //   resetButton.textContent = "New Colors"; //  this.textContent = "New Colors"; works
  //   colors = generateRandomColors(numberOfSquares);
  //   pickedColor = pickColor();
  //   colorDisplay.textContent = pickedColor;
  //   for (let i = 0; i < squares.length; i++) {
  //     squares[i].style.backgroundColor = colors[i];
  //   }
  //   h1.style.backgroundColor = "steelblue";
  //   messageDisplay.textContent = "";
  reset();
});

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < colors.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)]; //math.random picks random number less than 1
}

function generateRandomColors(count) {
  //add count random colors to array

  let colorArrays = [];

  for (let i = 0; i < count; i++) {
    colorArrays.push(randomColors());
  }

  return colorArrays;
}

function randomColors() {
  let red = Math.floor(Math.random() * 256); //multiply 256 instead of 255 since round down by one
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}