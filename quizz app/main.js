const questions = [
  {
    question: 'What is the capital of France',
    options: ['Ljubljana', 'Paris', 'Madrid', 'London'],
    answer: 'Paris',
  },
  {
    question: "What does 'len()' do in Python?",
    options: [
      'Add two numbers',
      'Returns a lenght of a list or a string',
      'Prints output to screen',
      'Defines a variable',
    ],
    answer: 'Returns a lenght of a list or a string',
  },
  {
    question: "Who has won the most Ballon d'Or rewards (as of 2025)",
    options: ['Cristiano Ronaldo', 'Lionel Messi', 'Pele', 'Zinedine Zidane'],
    answer: 'Lionel Messi',
  },
  {
    question: 'What does HTML stand for',
    options: [
      'Hyper Trainer Marketing Language',
      'Hyper Text Markup Language',
      'Hyper Tool Multi Language',
      'High Text Machine language',
    ],
    answer: 'Hyper Text Markup Language',
  },
  {
    question: 'Who is the known father of modern mathematics',
    options: ['Isaac Newton', 'Albert Einstein', 'Euclid', 'Pythagoras'],
    answer: 'Euclid',
  },
];

let counter = 0;
let praviOdg = 0;
let hidden = 'opacity-none';
let visible = 'opacity';
let div1ans = document.getElementById('questins');
let vpr = document.getElementById('vprasanje');
let zacni = document.getElementById('begin');
let q1 = document.getElementById('ena');
let q2 = document.getElementById('dve');
let q3 = document.getElementById('tri');
let q4 = document.getElementById('stiri');
let koncnidiv = document.getElementById('koncni');

zacni.addEventListener('click', startQuiz);

function progress() {
  let procenti = document.getElementById('progress');
  procenti.style.width = (counter / questions.length) * 100 + '%';
}

function startQuiz() {
  zacni.classList.remove(visible);
  zacni.classList.add(hidden);
  div1ans.classList.remove(hidden);
  div1ans.classList.add(visible);
  vpr.classList.remove(hidden);
  vpr.classList.add(visible);
  addQuestion();
  progress();
  koncnidiv.textContent = 'Quiz App';
}

function addQuestion() {
  vpr.textContent = questions[counter].question;
  q1.innerHTML = questions[counter].options[0];
  q2.innerHTML = questions[counter].options[1];
  q3.innerHTML = questions[counter].options[2];
  q4.innerHTML = questions[counter].options[3];
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;

  if (selectedAnswer === questions[counter].answer) {
    console.log('You choose correct answer');
    praviOdg += 1;
  } else {
    console.log('You choose wrong answer');
    praviOdg = praviOdg;
  }
  counter += 1;

  if (counter < questions.length) {
    setTimeout(addQuestion, 500); //addQuestion();
    progress();
  } else {
    koncnidiv.textContent = `imaš ${praviOdg}/5 pravih odgovorov`;
    progress();
    konec();
    console.log(`imaš ${praviOdg} pravilnih odgovorov`);
  }
}

[q1, q2, q3, q4].forEach((button) => {
  button.addEventListener('click', checkAnswer);
});

function konec() {
  vpr.classList.remove(visible);
  vpr.classList.add(hidden);
  zacni.classList.remove(hidden);
  zacni.classList.add(visible);
  div1ans.classList.remove(visible);
  div1ans.classList.add(hidden);
  counter = 0;
  praviOdg = 0;
}
