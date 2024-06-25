// Diccionario de código Morse con letras, números y símbolos en Morse como valores
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

// Creación de un diccionario inverso para facilitar la desencriptación
const reversed = Object.entries(crypt).reduce(
  (acc, [key, value]) => ((acc[value] = key), acc),
  {}
);

// Función para encriptar texto en español a código Morse
function encrypt() {
  let answerMorse = "";
  // Obtener el valor del campo de entrada y convertirlo a mayúsculas
  let español = $("#español").val().toUpperCase();

  // Recorrer cada carácter del texto en español
  for (let i = 0; i < español.length; i++) {
    // Si el carácter no es un espacio, buscar su equivalente en código Morse
    if (español[i] != " ") {
      answerMorse += crypt[español[i]];
    }
    // Añadir un espacio después de cada código Morse
    answerMorse += " ";
  }

  // Asignar el resultado al campo de entrada de la respuesta en Morse
  $("#answerMorse").val(answerMorse);
}

// Función para desencriptar código Morse a texto en español
function decrypt() {
  let answerEspañol = "";
  // Obtener el valor del campo de entrada de Morse
  let morse = $("#morse").val();
  // Reemplazar guiones bajos por guiones
  morse = morse.replaceAll("_", "-");
  // Reemplazar dobles espacios por barra que representa un espacio entre palabras en Morse
  morse = morse.replaceAll("  ", " / ");
  // Dividir la cadena Morse en un array de caracteres/códigos Morse
  morse = morse.split(" ");

  // Recorrer cada elemento del array de Morse
  for (let i = 0; i < morse.length; i++) {
    // Si encuentra una barra, añadir un espacio en el texto en español
    if (morse[i] == "/") {
      answerEspañol += " ";
    } else if (morse[i] == " " || morse[i] == "") {
      // Si el elemento es un espacio o está vacío, continuar al siguiente
      continue;
    } else {
      // Buscar el equivalente en texto español y añadirlo a la respuesta
      answerEspañol += reversed[morse[i]];
    }
  }

  // Asignar el resultado al campo de entrada de la respuesta en español
  $("#answerEspañol").val(answerEspañol);
}
