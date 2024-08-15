import { handleBotInput, resetBot, getBotState } from './bot.js';

describe('Bot Interaction', () => {
  beforeEach(() => {
    resetBot();  // Reiniciar el estado del bot antes de cada prueba
  });

  test('Debe iniciar preguntando el nombre', () => {
    const response = handleBotInput('');
    expect(response).toBe("Hola! ¿Cuál es tu nombre?");
    expect(getBotState().step).toBe(1);
  });

  test('Debe pedir el género después de recibir el nombre', () => {
    handleBotInput('Carlos');
    const response = handleBotInput('Carlos');
    expect(response).toBe("Mucho gusto, Carlos. ¿Cuál es tu género (masculino/femenino)?");
    expect(getBotState().step).toBe(2);
  });

  test('Debe pedir la edad después de recibir el género', () => {
    handleBotInput('Carlos');
    handleBotInput('masculino');
    const response = handleBotInput('masculino');
    expect(response).toBe("Entendido. ¿Cuál es tu edad, Carlos?");
    expect(getBotState().step).toBe(3);
  });

  test('Debe saludar como señor o joven dependiendo de la edad', () => {
    handleBotInput('Carlos');
    handleBotInput('masculino');
    const response = handleBotInput('30');
    expect(response).toContain("Hola señor Carlos!");
    expect(getBotState().step).toBe(4);
  });

  test('Debe manejar correctamente la selección de idioma', () => {
    handleBotInput('Carlos');
    handleBotInput('masculino');
    handleBotInput('30');
    const responseEspanol = handleBotInput('espanol');
    expect(responseEspanol).toBe("Hola, señor Carlos!");

    resetBot();  // Reiniciar para probar el otro caso
    handleBotInput('Carlos');
    handleBotInput('masculino');
    handleBotInput('30');
    const responseIngles = handleBotInput('ingles');
    expect(responseIngles).toBe("Hello, Mr. Carlos!");
  });

  test('Debe manejar errores en la edad', () => {
    handleBotInput('Carlos');
    handleBotInput('masculino');
    const response = handleBotInput('not a number');
    expect(response).toBe("Por favor, introduce una edad válida.");
    expect(getBotState().step).toBe(3);  // No debe avanzar al siguiente paso
  });
});

