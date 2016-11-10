'use strict';

var userName = '';
var answerTally = 0;
function nameQuestion() {
  userName = prompt('Enough about me. What is your name?');
  console.log('User responded to name question with: ' + userName);
}

//FIRST QUESTION
function firstQuestion() {
  var firstYesOrNoQuestionAnswer = prompt('Thanks for sharing, ' + userName + '. Now let\'s get back to me. Why don\'t we play a guessing game about the places I have traveled? Have I been to Croatia?');

  console.log('User responded to the first question with: ' + firstYesOrNoQuestionAnswer, '   Correct answer is: yes');

  if (firstYesOrNoQuestionAnswer.toLowerCase() === 'yes' || firstYesOrNoQuestionAnswer.toLowerCase() === 'y' || firstYesOrNoQuestionAnswer.toLowerCase() === 'yep'){
    alert('Correct!');
    answerTally += 1;
  } else if (firstYesOrNoQuestionAnswer.toLowerCase() === 'no' || firstYesOrNoQuestionAnswer.toLowerCase() === 'n'){
    alert('Actually, I have!');
  } else {
    alert('Come on. I asked a simple \'yes\' or \'no\' question.');
  }
  //CURRENT ANSWER TALLY
  console.log('The correct answer tally after the first question: ' + answerTally);
}

//SECOND QUESTION
function secondQuestion() {
  var secondYesOrNoQuestionAnswer = prompt('Have I traveled to Egypt?');

  console.log('User responded to the second question with: ' + secondYesOrNoQuestionAnswer, '   Correct answer is: yes');

  if (secondYesOrNoQuestionAnswer.toLowerCase() === 'yes' || secondYesOrNoQuestionAnswer.toLowerCase() === 'y') {
    alert('Yes! The pyramids are pretty cool.');
    answerTally += 1;
  } else if (secondYesOrNoQuestionAnswer.toLowerCase() === 'no' || secondYesOrNoQuestionAnswer.toLowerCase() === 'n'){
    alert('You\'re wrong this time.');
  } else {
    alert('Huh?');
  }
//CURRENT ANSWER TALLY
  console.log('The correct answer tally after the second question: ' + answerTally);
}
//THIRD QUESTION
function thirdQuestion() {
  var thirdYesOrNoQuestionAnswer = prompt('Have I been to South Africa?');

  console.log('User responded to the third question with: ' + thirdYesOrNoQuestionAnswer, '   Correct answer is: no');

  if (thirdYesOrNoQuestionAnswer.toLowerCase() === 'yes' || thirdYesOrNoQuestionAnswer.toLowerCase() === 'y'){
    alert('Sadly, I have not. I have not been to South Africa, but it is on my list of places I\'d like to visit.');
  } else if (thirdYesOrNoQuestionAnswer.toLowerCase() === 'no' || thirdYesOrNoQuestionAnswer.toLowerCase() === 'n'){
    alert('You would be correct, but it is top on my list of places I would like to go!');
    answerTally += 1;
  } else {
    alert('What language are you responding in?');
  }
  //CURRENT ANSWER TALLY
  console.log('The correct answer tally after the third question: ' + answerTally);
}

//FOURTH QUESTION
function fourthQuestion() {
  var fourthYesOrNoQuestionAnswer = prompt('Do you think I have been to Japan, ' + userName + '?');

  console.log('User responded to the fourth question with: ' + fourthYesOrNoQuestionAnswer, '   Correct answer is: yes');

  if (fourthYesOrNoQuestionAnswer.toLowerCase() === 'yes' || fourthYesOrNoQuestionAnswer.toLowerCase() === 'y'){
    alert('I have! I spent a summer there studying landscape architecture.');
    answerTally += 1;
  } else if (fourthYesOrNoQuestionAnswer.toLowerCase() === 'no' || fourthYesOrNoQuestionAnswer.toLowerCase() === 'n'){
    alert('Incorrect this time! I spent a summer there studying landscape architecture.');
  } else {
    alert('Ok...');
  }
  //CURRENT ANSWER TALLY
  console.log('The correct answer tally after the fourth question: ' + answerTally);
}
//FIFTH QUESTION

function fifthQuestion() {
  var fifthYesOrNoQuestionAnswer = prompt('Finally, have I been to Ecuador?');

  console.log('User responded to the fifth question with: ' + fifthYesOrNoQuestionAnswer, '   Correct answer is: no');

  if (fifthYesOrNoQuestionAnswer.toLowerCase() === 'yes' || fifthYesOrNoQuestionAnswer.toLowerCase() === 'y'){
    alert('You are wrong. It\'s on my list though!');
  } else if (fifthYesOrNoQuestionAnswer.toLowerCase() === 'no' || fifthYesOrNoQuestionAnswer.toLowerCase() === 'n'){
    alert('Unfortunately, you are correct. It\'s on my list though!');
    answerTally += 1;
  } else {
    alert('I\'ll take that as a yes.');
  }
  //CURRENT ANSWER TALLY
  console.log('The correct answer tally after the fifth question: ' + answerTally);
}
//SIXTH QUESTION

function sixthQuestion() {
  var numberGuess = prompt('What is my favorite number?');

  numberGuess = parseInt(numberGuess);

  var secretNumber = 8;

  console.log('The guess is: ', numberGuess, 'and the correct answer is:', secretNumber);
  for (var i = 0; i < 3; i++){
    if (numberGuess > secretNumber){
      alert('Nah. That guess is too high.');
      numberGuess = prompt('Try again. What is my favorite number?');
    } else if (numberGuess < secretNumber){
      alert('Nope. Too low.');
      numberGuess = prompt('Try again. What is my favorite number?');
    } else {
      i = 3;
      alert('YOU GOT IT!');
      answerTally += 1;
    }
  }
  //CURRENT ANSWER TALLY
  console.log('The correct answer tally after the sixth question: ' + answerTally);
}

//SEVENTH QUESTION
function seventhQuestion() {
  var stateGuess = prompt('Can you guess a state I have lived in?');

  var stateArray = ['oregon', 'texas', 'nebraska'];

  console.log('The guess is: ', stateGuess, '   Correct answers are: Oregon, Texas, and Nebraska');

  for (var y = 0; y < 5; y++){
    if (stateGuess.toLowerCase() === stateArray[0]) {
      y = 5;
      answerTally += 1;
      alert('Yes! I live in Oregon now. I have also lived in Nebraska and Texas.');
    } else if (stateGuess.toLowerCase() === stateArray[1]) {
      y = 5;
      answerTally += 1;
      alert('Yes! I grew up in Texas. I have also lived in Nebraska and Oregon.');
    } else if (stateGuess.toLowerCase() === stateArray[2]) {
      y = 5;
      answerTally += 1;
      alert('Yes! I was born in Nebraska. I have also lived in Texas and Oregon.');
    } else {
      alert('I have never lived in that state.');
      stateGuess = prompt('Guess again!');
    }
  }
}

nameQuestion();
firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();

//CURRENT ANSWER TALLY
console.log('The correct answer tally after the seventh question: ' + answerTally);

//FINAL ANSWER TALLY
console.log('User answered ' + answerTally + ' of the 7 questions correctly.');

//PROMPT TO SHOW SCORE AT END OF GAME
if (answerTally <= 4){
  alert(userName + '! You got ' + answerTally + ' out of 7 correct. Better luck next time!');
} else if (answerTally === 7){
  alert(userName + '! You got ' + answerTally + ' out of 7 correct. Perfect score!');
} else {
  alert(userName + '! You got ' + answerTally + ' out of 7 correct. Pretty good!');
}
