/*
  File: quiz.js
  Author: 
  SAIBT ID: 
  Description: Assignment 2 - HTML file
  This is my own work as defined by SAIBT's Academic Misconduct Policy.
  */

function startQuiz() {
    // Initialize score to track the number of correct answers
    let score = 0;
  
    // Array of quiz questions, each with choices and the correct answer
    const questions = [
      {
        question: "Which of this is NOT an infinity stone?",
        choices: ["A. Love", "B. Reality", "C. Space", "D. Time"],
        correct: "A"
      },
      {
        question: "What is Captain America's shield made out of?",
        choices: ["A. Gravitonium ", "B. Vibranium", "C. Adamantium ", "D. Scabrite"],
        correct: "B"
      },
      {
        question: "What Country are Scarlet Witch and Quicksilver from?",
        choices: ["A. Wakanda", "B. Sokovia", "C. Krakoa", "D. Symkaria"],
        correct: "B"
      },
      {
        question: "Whats rthe name of the helpful AI Tony start invented to replace J.A.R.V.I.S.?",
        choices: ["A. S.H.I.E.L.D", "B. U.L.T.R.O.N", "C. F.R.I.D.A.Y", "D. E.D.I.T.H"],
        correct: "C"
      },
      {
        question: "Who can lift Thor's hammer?",
        choices: ["A. Captain America", "B. Spiderman", "C. Black Widow", "D. Tony Stark"],
        correct: "A"
      },
      {
        question: "Which S.H.I.E.L.D building is located in Washington DC?",
        choices: ["A. Stark Tower", "B. The Hub", "C. The Triskelion", "D. The fridge"],
        correct: "C"
      },
      {
        question: "What is Ton Stark's dad's name?",
        choices: ["A. Antony", "B. Steve", "C. Howard", "D. Edwin"],
        correct: "C"
      },
      {
        question: "Which species did Loki discover he is?",
        choices: ["A. Human", "B. Asgardian", "C. Frost Giant", "D. A god"],
        correct: "C"
      },
      {
        question: "Who is Hawkeye married to?",
        choices: ["A. Natasha", "B. Wanda", "C. Bobbi", "D. Laura"],
        correct: "D"
      },
      {
        question: "Which of this characters is not a cild of Thanos?",
        choices: ["A. Nebula", "B. Vision", "C. Gomora", "D. Ronan"],
        correct: "B"
      },
      {
        question: "Which kind of animal does captail marvel befriend?",
        choices: ["A. Dog", "B. Cat", "C. Goose", "D. Monster"],
        correct: "C"
      },
      {
        question: "How are Erick Kilmonger and T Challa related?",
        choices: ["A. Brothers", "B. Uncle and nephew", "C. Cousins", "D. Father and son"],
        correct: "C"
      },
      {
        question: "Who is Peter parkers best friend?",
        choices: ["A. Ned", "B. Mj", "C. Tony", "D. Flash"],
        correct: "A"
      },
      {
        question: "What kind of doctor is Dr Strange?",
        choices: ["A. Neurosurgeon", "B. General Practitioner", "C. Cardiologist", "D. Oncologist"],
        correct: "A"
      },
      {
        question: "What museum has Captain America exhibit?",
        choices: ["A. The Smithsonian", "B. The Met", "C. International Spy Museum", "D. The Guggenheim"],
        correct: "A"
      }
    ];
  
    // Loop through each question and prompt the user for an answer
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
  
      // Show question and choices, then get user input
      let userInput = prompt(`${q.question}\n${q.choices.join('\n')}`);
      let answer = userInput ? userInput.toUpperCase() : "";
  
      // Check if the answer is correct and increase score
      if (answer === q.correct) {
        score++;
      }
    }
  
    // Generate feedback message based on the user's score
    let message = "";
    if (score >= 13) {
      message = "<strong> You're a Total Marvel Expert!</strong> You've seen every MCU movie in theatres since Iron Man. You are basically the Tony Stark of Marvel trivia. but you're careful to keep spoilers to yourself.";
    } else if (score >= 11) {
      message = "<strong> You're definitely a huge Marvel fan! </strong> You're the resident Marvel expert of your friend group. Whenever a new MCU movie come out you are ussually incharge of planning a time and day for everyone to go see it";
    } else if (score >= 6) {
      message = "<strong> Time for a Marvel movie marathon! </strong> You've probably seen most of the MCU movies, but you haven't watched them recently. Go have a marvel movie Marathon then come back and try again";
    } else {
      message = "<strong> Time to go rewatch the phase One releases! </strong> You've probably seen th major Marvel releases like Avengers: End Game or Black Panther. However you've likely missed a few of the earliest MCU movies, so it's time to go back to the beginning!";
    }
  
    // Store the final score and message in localStorage to be used on another page
    localStorage.setItem("score", score);
    localStorage.setItem("message", message);
  
    // Redirect to results page (quiz.html)
    window.location.href = "quiz.html";
  }
  