//@ts-check
import { Question } from "./Question.js";

export class Quiz {
  score = 0;
  questionIndex = 0;

 
  constructor(questions) {
    this.questions = questions;
  }

  // /**
  //  *
  //  * @returns {Question} la pregunta encontrada
  //  */

  //valida el indice de las preguntas para pasar a la siguiente
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  // Finalizar cuando se valide la longitud de las preguntas y no existan mas
  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  //valida la respuesta y aumenta el contador score inicializado anteriormente 1 si la respuesta es correcta
  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}