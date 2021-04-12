var readlineSync = require("readline-sync");
var userName = readlineSync.question("Hi! What's your name?  ");
console.log("\n");
var score = 0;
console.log("Welcome " + userName + ' to "How Well Do You Know Dhriti" Quiz');

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("You are absolutely right, Congrats!");
    score = score + 1;
    console.log("No. of questions correct till now(Your Score is): " + score);
    console.log("------------------------------------------------------------------------");
  }
  else{
    console.log("Oops! You are wrong");
    console.log("No. of questions correct till now(Your Score is): " + score);
    console.log("-------------------------------------------------------------------------");
  }
}

var questionSet = [
	{
		  question: `
  Q1)If Dhriti Saluja could be any animal for a day, which one would it be?
    a: Rabbit
    b: Cat
    c: Shark\n`,
	
		  answer: "b"
	},
  {
      question: `
  Q2)What is Dhriti Saluja's favorite YouTuber?
    a: Lakshay Kaushik
    b: Dhruv Rathee
    c: Jiggar Thakkar\n `,
    
      answer: "a"
  },
  {
      question: `
  Q3)What is Dhriti Saluja's favorite Netflix Series?
    a: Friends
    b: 13 reasons why
    c: Little Things\n`,

      answer: "c"
  },
  {
      question: `
  Q4)What food does dhriti hate?
    a: Bitter Gourd
    b: Pumpkin
    c: Aloo Methi\n`,

      answer: "b"
  },
  {
      question: `
  Q5)Did I play any sports when I was growing up?
    a: Badminton
    b: Kho-Kho
    c: Dodgeball\n`,
      answer: "b"
  }
]

for(var i = 0; i<questionSet.length; i++){
  var currentques = questionSet[i];
  play(currentques.question,currentques.answer);
}

var highScore = [
  {
    name: "Dhriti",
    score: 5
  },
  {
    name: "Krishna",
    score: 4
  }
]


console.log(userName + "'s" +" final score is: " + score);
console.log("\n");

console.log("Top two highest scorers before you played: ");
for(var k=0; k<highScore.length; k++){
  var details = highScore[k];
  console.log(details.name + ": " + details.score);
  
}

if(highScore[0].score <= score && highScore[1].score < score){
  console.log("\n");
  console.log("Congrats! But now you have become the top scorer");
  console.log("Take a screenshot and Whatsapp me,");
  console.log("I'll update top two high scorers in my database :)");
}

else{
  console.log("Not a winner, but well played :)")
}

