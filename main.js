// list words to be chosen from
const words = ["goblin", "banshee", "ghouls", "sabre", "turtle", "sorcery", "ashes", "empire", "ruinous"];

// choose random word from words
const randomWord = words[Math.floor(Math.random() * words.length)];
// create empty array for guessed letters
const guessedLetters = [];

// 
function displayState(word, guessedLetters, incorrectGuesses) {
  let display = "";
  for (let i = 0; i < word.length; i++) {
    if (guessedLetters.includes(word[i])) {
      display += word[i] + " ";
    } else {
      display += "_ ";
    }
  }
  const gameElement = document.getElementById("game");
  gameElement.innerHTML = "<p>" + display + "</p><p>Incorrect guesses: " + incorrectGuesses + "</p>";
}

// check for win
function checkWin(word, guessedLetters) {
  for (let i = 0; i < word.length; i++) {
    if (!guessedLetters.includes(word[i])) {
      return false;
    }
  }
  return true;
}


function playGame() {
  let incorrectGuesses = 0;
  console.log("playGame function is running!");
  // create input element and add event listener
  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.style.backgroundColor = "red";
  inputElement.style.color = "white";
  inputElement.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const guess = inputElement.value;
      guessedLetters.push(guess);
      if (!randomWord.includes(guess)) {
        incorrectGuesses++;
      }
      if (checkWin(randomWord, guessedLetters)) {
        const gameElement = document.getElementById("display");
        gameElement.innerHTML = "<p>You win!</p>";
        return;
      }
      inputElement.value = "";
      displayState(randomWord, guessedLetters, incorrectGuesses);
    }
  });

  // append input element to input container
  const inputContainer = document.getElementById("input-container");
  inputContainer.appendChild(inputElement);

  // call displayState to display initial state of game ??? 
  displayState(randomWord, guessedLetters, incorrectGuesses);
}


// call function
playGame();