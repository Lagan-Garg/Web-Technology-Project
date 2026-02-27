const defaultQuestions = [
  {
    q: "In which year was MAIT established?",
    a: ["1998", "1999", "2000", "2001"],
    c: 1,
    f: "MAIT started in 1999.",
  },
  {
    q: "Who founded MATES?",
    a: ["Dr. N.K. Garg", "Ratan Tata", "Arvind Kejriwal", "S. Jain"],
    c: 0,
    f: "Dr. Nand Kishore Garg is the founder.",
  },
  {
    q: "MAIT is affiliated with which University?",
    a: ["DU", "GGSIPU", "JNU", "Jamia"],
    c: 1,
    f: "It is affiliated with IP University.",
  },
  {
    q: "Where is MAIT located?",
    a: ["Dwarka", "Janakpuri", "Rohini", "Pitampura"],
    c: 2,
    f: "The campus is in Rohini Sector 22.",
  },
  {
    q: "Admin offices are in which block?",
    a: ["Block 1", "Block 9", "Block 5", "Block 2"],
    c: 1,
    f: "Block 9 is the admin hub.",
  },
  {
    q: "What is the cultural fest name?",
    a: ["Anugoonj", "Genesis", "Mridang", "Antaragni"],
    c: 2,
    f: "Mridang is the annual fest.",
  },
  {
    q: "Which was an original 1999 department?",
    a: ["AI", "CSE", "DS", "MAE"],
    c: 1,
    f: "CSE was one of the first branches.",
  },
  {
    q: "What society does MAIT belong to?",
    a: ["MATES", "MAIDS", "MAIT-S", "Trust"],
    c: 0,
    f: "Maharaja Agrasen Technical Education Society.",
  },
  {
    q: "How many academic blocks are there?",
    a: ["5", "7", "9", "12"],
    c: 2,
    f: "There are 9 blocks in total.",
  },
  {
    q: "What is the college motto?",
    a: ["Service", "Yoga Karmasu Kaushalam", "Knowledge", "Truth"],
    c: 1,
    f: "It translates to 'Excellence in Action'.",
  },
];

// Load from Admin Database or use defaults
const quizData =
  JSON.parse(localStorage.getItem("mait_db")) || defaultQuestions;

let currentIdx = 0;
let score = 0;
let timer;
let timeLeft = 15;

const qEl = document.getElementById("question-text");
const optBtns = document.querySelectorAll(".opt-btn");
const feedBox = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const bar = document.getElementById("progress");

function startTimer() {
  timeLeft = 15;
  document.getElementById("timer").innerText = `${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleSelect(-1);
    }
  }, 1000);
}

function loadNext() {
  if (currentIdx >= quizData.length - 1) return showResults();
  currentIdx++;
  setupUI();
}

function setupUI() {
  clearInterval(timer);
  feedBox.classList.add("hidden");
  nextBtn.classList.add("hidden");
  optBtns.forEach((b) => {
    b.className = "opt-btn";
    b.disabled = false;
  });

  qEl.innerText = quizData[currentIdx].q;
  optBtns.forEach((b, i) => (b.innerText = quizData[currentIdx].a[i]));
  bar.style.width = `${(currentIdx / quizData.length) * 100}%`;
  startTimer();
}

function handleSelect(idx) {
  clearInterval(timer);
  const correct = quizData[currentIdx].c;
  optBtns.forEach((b) => (b.disabled = true));

  if (idx === correct) {
    if (idx !== -1) optBtns[idx].classList.add("correct");
    score++;
    document.getElementById("feedback-status").innerText = "Correct!";
  } else {
    if (idx !== -1) optBtns[idx].classList.add("wrong");
    optBtns[correct].classList.add("correct");
    document.getElementById("feedback-status").innerText = "Incorrect!";
  }

  document.getElementById("explanation").innerText = quizData[currentIdx].f;
  feedBox.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
}

function showResults() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("final-score").innerText =
    `You scored ${score} out of ${quizData.length}`;
}

setupUI();
