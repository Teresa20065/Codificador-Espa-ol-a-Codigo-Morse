// morse code and alphabets/numbers key value pairs
const crypt = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  Ñ: "-. -. --",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
};

const reversed = Object.entries(crypt).reduce(
  (acc, [key, value]) => ((acc[value] = key), acc),
  {}
);

// encriptando español a morse
function encrypt() {
  let answerMorse = "";
  let español = $("#español").val().toUpperCase();

  for (let i = 0; i < español.length; i++) {
    if (español[i] != " ") {
      answerMorse += crypt[español[i]];
    }

    answerMorse += " ";
  }

  $("#answerMorse").val(answerMorse);
}

// desencriptando morse a español
function decrypt() {
  let answerEspañol = "";
  let morse = $("#morse").val();

  // just if somebody used '_' instead of '-'
  morse = morse.replaceAll("_", "-");
  morse = morse.replaceAll("  ", " / ");
  morse = morse.split(" ");

  for (let i = 0; i < morse.length; i++) {
    if (morse[i] == "/") {
      answerEspañol += " ";
    } else if (morse[i] == " " || morse[i] == "") {
      continue;
    } else {
      answerEspañol += reversed[morse[i]];
    }
  }

  $("#answerEspañol").val(answerEspañol);
}
