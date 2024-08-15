let step = 0;
let name = "";
let gender = "";
let age = 0;

export function handleBotInput(input) {
  input = input.toLowerCase();
  let response = '';

  switch(step) {
    case 0:
      response = "Hola! ¿Cuál es tu nombre?";
      step++;
      break;
    case 1:
      name = input.charAt(0).toUpperCase() + input.slice(1);
      response = `Mucho gusto, ${name}. ¿Cuál es tu género (masculino/femenino)?`;
      step++;
      break;
    case 2:
      gender = input;
      response = `Entendido. ¿Cuál es tu edad, ${name}?`;
      step++;
      break;
    case 3:
      age = parseInt(input);
      if (isNaN(age)) {
        response = "Por favor, introduce una edad válida.";
      } else {
        if (age > 25) {
          response = `Hola señor ${name}!`;
        } else {
          response = `Hola joven ${name}!`;
        }
        response += " ¿Prefieres hablar en español o inglés?";
        step++;
      }
      break;
    case 4:
      if (input === "espanol" || input === "español") {
        response = `Hola, ${gender === 'masculino' ? 'señor' : 'señora'} ${name}!`;
      } else if (input === "ingles" || input === "inglés") {
        response = `Hello, ${gender === 'masculino' ? 'Mr.' : 'Ms.'} ${name}!`;
      } else {
        response = "Por favor, elige 'espanol' o 'ingles'.";
      }
      break;
    default:
      response = "Gracias por hablar conmigo.";
      break;
  }

  return response;
}
