import { sumOfQuestions } from './utils/questions.js';


let userName;
let randomQuestion;
let questions = [];

let index = 0;
let round = 1;
let crono;

let scoreValue = 27;
let correctAnswers = 0;
let incorrectAnswers = 0;

const questionJS = document.querySelector('.question');
const send = document.querySelector('#btnsend');
const startButton = document.querySelector('#btn-start');
const playAgain = document.querySelector('#play-again');
const endGameDisplay = document.querySelector('.end-game');
const panelGame = document.querySelector('.panel-game');
const closeButton = document.querySelector('#btnclose');
const buttonPasapalabra = document.querySelector('#btnpasapalabra');
const score = document.querySelector('.score');
const userAnswer = document.querySelector('#txtAnswer');
const letter = document.querySelectorAll('.letter');
const result = document.querySelector('.result-container .result');
const restartButton = document.querySelector('#play-again');
const infoquestion = document.querySelector(".question");
const welcome = document.querySelector(".welcome");
const btnName = document.querySelector("#btnName");
const instructions = document.querySelector(".instructions");
const userWelcome = document.querySelector(".userWelcome");
const correctName = document.querySelector(".correctName");
const showRanking = document.querySelector(".showRanking");
const infoGame = document.querySelector('.info-game')


const getQuestions = () => {
    // Recorre el array sumOfQuestions que contiene preguntas agrupadas por letra
    for (let i = 0; i < sumOfQuestions.length; i++) {
        // Genera un índice aleatorio dentro del rango de preguntas para la letra actual
        const randomIndex = Math.floor(Math.random() * sumOfQuestions[i].length);

        // Selecciona una pregunta aleatoria para la letra actual
        randomQuestion = sumOfQuestions[i][randomIndex];

        // Agrega la pregunta seleccionada al array questions
        questions.push(randomQuestion);
    }
    // Devuelve el array de preguntas generado
    return questions;
};


const askName = () => {

    userName = document.querySelector("#userName").value;

    if (userName === "") {
        correctName.textContent = "Ingrese un nombre válido";

    } else {
        userWelcome.textContent = `Bienvenido   ${userName}.`;
        instructions.textContent = 'Lea atentamente las instrucciones';
        welcome.style.visibility = 'hidden';
        btnName.style.visibility = 'hidden';
        buttonPasapalabra.style.visibility = 'visible';
        send.style.visibility = 'visible';
        infoquestion.style.visibility = 'visible';
        userAnswer.style.visibility = 'visible';
        welcome.style.visibility = 'hidden';
        startButton.addEventListener('click', startGame);
    }
}



const startGame = () => {
    // Verifica si el juego ya está en progreso antes de iniciarlo nuevamente
    if (index === -1 || (correctAnswers + incorrectAnswers) === 0) {
        // Restablecer el array de preguntas
        questions = getQuestions();

        // Restablecer el índice, la ronda y las respuestas
        index = -1; // El índice se inicia en -1 porque el juego comienza en la pregunta 0
        round = 1;
        correctAnswers = 0;
        incorrectAnswers = 0;

        nextQuestion(); // Muestra la primera pregunta

        startButton.disabled = true;
        buttonPasapalabra.style.visibility = 'visible';
        send.style.visibility = 'visible';
        infoquestion.style.visibility = 'visible';
        userAnswer.style.visibility = 'visible';
        welcome.style.visibility = 'hidden';
        userWelcome.style.visibility = 'hidden';
        instructions.style.visibility = 'hidden';
        closeButton.addEventListener('click', closeGame);


        // Configurar el temporizador solo si no está activo
        if (!crono) {
            // Restablecer el tiempo y mostrarlo
            timeDisplay();
        }
        // Restablecer el estado de las preguntas
        questions.forEach(question => {
            question.status = 0;
        });
    }
};


const timeDisplay = () => {
    const timer = document.querySelector('.timer');
    let timeValue = 120;

    crono = setInterval(() => { // setInterval es una función que crea un temporizador
        timer.innerHTML = timeValue; // Se muestra el tiempo en el elemento con la clase .timer
        timeValue--; // Se decrementa el tiempo en 1 segundo

        if (timeValue < 0) {
            endGame(); // Si el tiempo se acaba, se llama a la función endGame()
        }
    }, 1000); // Se ejecuta cada segundo
};


const nextQuestion = () => {
    index = index + 1; // Incrementa el índice de pregunta
    questionJS.innerHTML = questions[index].question; // Muestra la pregunta actual
};


const nextRound = () => {
    round++;
    while ((questions[index].status === 1) && (correctAnswers + incorrectAnswers < sumOfQuestions.length)) { // Mientras la pregunta no haya sido respondida y no haya terminado el juego 
        index++; // Incrementa el índice de pregunta
    }
    questionJS.innerHTML = questions[index].question; // Muestra la pregunta actual
    userAnswer.textContent = ""; // 
};


// Función que verifica el estado del juego y toma decisiones en consecuencia
const checkStatus = () => {
    // Si se han respondido todas las preguntas, finaliza el juego
    if (correctAnswers + incorrectAnswers === sumOfQuestions.length) {
        endGame();
    }

    // Si estamos en la primera ronda y hemos llegado al final de todas las preguntas
    if ((round >= 1) && (index === 26)) { // 26 es el número total de preguntas porque el índice comienza en 0
        index = 0; // Reinicia el índice a cero
        nextRound(); // Avanza a la siguiente ronda
    }
    // Si estamos en la primera ronda y el índice es menor que 26
    else if ((round === 1) && (index < 26)) {
        nextQuestion(); // Muestra la siguiente pregunta
    }
    // Si estamos en una ronda posterior a la primera y el índice es menor que 26
    else if ((round > 1) && (index < 26)) {
        //Avanza al siguiente índice hasta encontrar una pregunta con estado diferente de 2 o recorrer todas las preguntas
        do {
            index++; // Incrementa el índice
            // Si llegamos al final de las preguntas, reinicia el índice y avanza a la siguiente ronda
            if (index === 26) {
                index = 0;
                nextRound();
            }
        } while ((questions[index].status !== 2) && (correctAnswers + incorrectAnswers < sumOfQuestions.length)); // mientras el status de la pregunta sea diferente de 2 o no hayamos terminado el juego
        // Muestra la pregunta correspondiente y reinicia el valor del campo de respuesta del usuario
        questionJS.innerHTML = questions[index].question;
        userAnswer.value = "";
    }
}


const showResult = () => {
    startButton.style.visibility = 'hidden'; // Oculta el botón de inicio
    result.textContent = `Respuestas correctas: ${correctAnswers} Respuestas incorrectas: ${incorrectAnswers}`; // Actualiza el texto del elemento de resultado
}


const passButton = () => {
    questions[index].status = 2;
    checkStatus(); // Verifica si se ha terminado el juego y muestra el resultado si es así.

};


const checkAnswer = () => {
    let answerUser = userAnswer.value.toLowerCase().trim(); // respuesta usuario en minúsculas y sin espacios

    if (answerUser === questions[index].answer.toLowerCase().trim()) { // Compara la respuesta del usuario con la respuesta correcta
        letter[index].classList.add("correct-answer"); // Agrega la clase correct-answer al elemento correspondiente para pintar el fondo 
        correctAnswers++;
        questions[index].status = 1;
        scoreValue--;
    } else {
        letter[index].classList.add("incorrect-answer");
        incorrectAnswers++;
        questions[index].status = 1;
    }
    score.textContent = scoreValue;
    userAnswer.value = "";
    checkStatus();
};


const restartGame = () => {

    startButton.style.visibility = 'visible';
    panelGame.style.visibility = 'visible';
    endGameDisplay.style.display = 'none';
    result.style.visibility = 'hidden';
    send.style.visibility = 'visible';
    buttonPasapalabra.style.visibility = 'visible';
    questionJS.style.visibility = 'visible';
    userAnswer.style.visibility = 'visible';
    showRanking.style.visibility = 'hidden';
    infoGame.style.visibility = 'visible';

    index = -1;
    round = 1;
    correctAnswers = 0;
    incorrectAnswers = 0;


    letter.forEach(letterelement => {
        letterelement.classList.remove("correct-answer");
        letterelement.classList.remove("incorrect-answer");
    })

    if (crono) {
        // Restablecer el tiempo y mostrarlo
        timeDisplay();
    }
    nextQuestion();

}

const closeGame = () => {
    endGame();
    result.style.visibility = 'visible';

};

const endGame = () => {
    clearInterval(crono);
    endGameDisplay.style.display = 'flex';
    panelGame.style.visibility = 'hidden';
    send.style.visibility = 'hidden';
    buttonPasapalabra.style.visibility = 'hidden';
    questionJS.style.visibility = 'hidden';
    userAnswer.style.visibility = 'hidden';

    startButton.disabled = true;
    showResult();
    infoGame.style.visibility = 'hidden';
    getRanking();
};



const getRanking = () => {
    if (correctAnswers + incorrectAnswers === 27) { // Si la suma de respuestas correctas y incorrectas es 27
        let ranking = []
        const player = { name: userName, correctAnswers: correctAnswers }// Se crea un objeto con el nombre del usuario y las respuestas correctas
        ranking.push(player); // Se agrega el objeto al array ranking
        ranking.sort((a, b) => b.correctAnswers - a.correctAnswers); // Se ordena el array de mayor a menor por las respuestas correctas
        ranking.forEach((player, index) => {
            showRanking.innerHTML += `<p>${index + 1}. ${player.name} - ${player.correctAnswers} respuestas correctas</p>`

        })
    }
}




send.addEventListener('click', checkAnswer);

playAgain.addEventListener('click', restartGame);
buttonPasapalabra.addEventListener('click', passButton);
restartButton.addEventListener('click', restartGame);
btnName.addEventListener('click', askName);




