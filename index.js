var readlineSync = require("readline-sync");
const chalk = require('chalk');
var highScores = [
  {
    name: "Ankush",
    score: "2",
  },
  {
    name: "Nishant",
    score: "4",
  }

]
var questions = [
  {
    question: "Who was the first batsman to score a century in the IPL?  ",
    answer: "Brendon McCullum",
  },
  {
    question: "Which team has maximum number of trophies? ",
    answer: "Mumbai Indians",
  },
  {
    question: "Highest individual score in ipl? ",
    answer: "175*",
  },
  {
    question: "Who is the captain of team Chennai Super Kings? ",
    answer: "Mahendra Singh Dhoni",
  },
  {
    question: "Who was the first bowler to take a hat trick in the IPL? ",
    answer: "Laxmipathy Balaji"
  },
]

var score = 0;

function welcome() {
  var userName = readlineSync.question(chalk.yellow("Enter your Name "));
  console.log("Welcome", chalk.green(userName),"Are you really an IPL fan ? "); 
}


function play(question, answer)
{
  var userAnswer = readlineSync.question(chalk.yellow(question));

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("Your Answer is correct! "));
    score++;
  }
  else
  {
    console.log(chalk.red("Your Answer is Wrong! "));
    console.log("Correct answer is : "+ answer.toUpperCase())
  }

  console.log("Current Score", chalk.green(score));
  console.log("--------------------");
}

function game(){
  for(var i = 0; i < questions.length; i++)
  {
    play(questions[i].question, questions[i].answer);
  }
}

function showFinalScore()
{
  console.log("Your score is ", chalk.green(score));
  console.log(chalk.blue("Check out the high scores, if you have beaten the highest score then ping me with a screenshot and I'll update it"));
  for(var i = 0; i < highScores.length; i++)
  {
    console.log(chalk.magenta(highScores[i].name, " ", highScores[i].score));
  }
}


welcome();
game();
showFinalScore();