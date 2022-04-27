// Crear y exporta clase para mi modelo cuestionario
export class Question {
    // Definir los atributos para la clase Question
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
  
    // crear metodos de mi clase que contiene la opcion seleccionada y returna si la opcion es correcta
    correctAnswer(choice) {
      return choice === this.answer;
    }
}
  

