// Llamar clase Question y data 
import { Question } from "../models/Question.js";
import { data } from "./data.js";


// Recorrer arreglos y retornar una pregunta con la clase Question.
export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
)
