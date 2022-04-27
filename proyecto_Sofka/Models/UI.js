export class UI {
    constructor() {}

    // Crear metodo para pintar pregunta
    showQuestion(text) {
      const questionTitle = document.getElementById("question");
      questionTitle.innerHTML = text;
    }
  
    // Llamar el id de nuestro index para estilizar con js
    showChoices(choices, callback) {
      const choicesContainer = document.getElementById("choices");
      choicesContainer.innerHTML = "";
      
      // Crear botones dependiendo la longitud del array de opciones de respuesta
      for (let i = 0; i < choices.length; i++) {
        const button = document.createElement("button");
        button.addEventListener("click", () => callback(choices[i]));
        button.className = "button";
        button.innerText = choices[i];
  
        choicesContainer.append(button);
      }
    }
    
    //pintar el resultado de las respuestas correctas
    showScores(score) {
      const gameOverHTML = `
        <h1>Result</h1>
        <h2 id="score">Your scores: ${score}</h2>
        `;
      
  
      const element = document.getElementById("quiz");
      element.innerHTML = gameOverHTML;
    }
  
    showProgress(currentIndex, total) {
      var element = document.getElementById("progress");
      element.innerHTML = `Question ${currentIndex} of ${total}`;
    }
  }

