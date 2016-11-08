'use strict';

var userName = prompt('Enough about me. What is your name?');

console.log('User responded to name question with: ' + userName);

var firstYesOrNoQuestionAnswer = prompt('Thanks for sharing, ' + userName + '. Now let\'s get back to me. Why don\'t we play a guessing game? Do you think I am from Texas?');

console.log('User responded to the first question with: ' + firstYesOrNoQuestionAnswer);

if (firstYesOrNoQuestionAnswer.toLowerCase() === 'yes' || firstYesOrNoQuestionAnswer.toLowerCase() === 'y' || firstYesOrNoQuestionAnswer.toLowerCase() === 'yep'){
  alert('Well you would be right. I grew up in the Houston area.');
} else if (firstYesOrNoQuestionAnswer.toLowerCase() === 'no' || firstYesOrNoQuestionAnswer.toLowerCase() === 'n'){
  alert('Well you would be wrong. I grew up in the Houston area.');
} else {
  alert('Come on. I asked a simple \'yes\' or \'no\' question.');
};

var secondYesOrNoQuestionAnswer = prompt('Are you disappointed to hear that I didn\'t ride a horse to school?');

console.log('User responded to the second question with: ' + secondYesOrNoQuestionAnswer);

if (secondYesOrNoQuestionAnswer.toLowerCase() === 'yes' || secondYesOrNoQuestionAnswer.toLowerCase() === 'y') {
  alert('I hate to break it to you, but I didn\'t own cowboy boots either.');
} else if (secondYesOrNoQuestionAnswer.toLowerCase() === 'no' || secondYesOrNoQuestionAnswer.toLowerCase() === 'n'){
  alert('Thank goodness.');
} else {
  alert('Huh?');
};

var thirdYesOrNoQuestionAnswer = prompt('Huge trucks are a popular vehicle choice in Texas. Do you think I drove one?');

console.log('User responded to the third question with: ' + thirdYesOrNoQuestionAnswer);

if (thirdYesOrNoQuestionAnswer.toLowerCase() === 'yes' || thirdYesOrNoQuestionAnswer.toLowerCase() === 'y'){
  alert('Wrong. I like the environment.');
} else if (thirdYesOrNoQuestionAnswer.toLowerCase() === 'no' || thirdYesOrNoQuestionAnswer.toLowerCase() === 'n'){
  alert('You would be correct.');
} else {
  alert('What language are you responding in?');
};

var fourthYesOrNoQuestionAnswer = prompt('I moved to Austin for college. Have you ever been there, ' + userName + '?');

console.log('User responded to the fourth question with: ' + fourthYesOrNoQuestionAnswer);

if (fourthYesOrNoQuestionAnswer.toLowerCase() === 'yes' || fourthYesOrNoQuestionAnswer.toLowerCase() === 'y'){
  alert('I hope you liked it!');
} else if (fourthYesOrNoQuestionAnswer.toLowerCase() === 'no' || fourthYesOrNoQuestionAnswer.toLowerCase() === 'n'){
  alert('Surprising. People often compare it to Portland.');
} else {
  alert('Ok...');
};

var fifthYesOrNoQuestionAnswer = prompt('Finally, do you like Texas?');

console.log('User responded to the fifth question with: ' + fifthYesOrNoQuestionAnswer);

if (fifthYesOrNoQuestionAnswer.toLowerCase() === 'yes' || fifthYesOrNoQuestionAnswer.toLowerCase() === 'y'){
  alert('I\'m glad to hear it.');
} else if (fifthYesOrNoQuestionAnswer.toLowerCase() === 'no' || fifthYesOrNoQuestionAnswer.toLowerCase() === 'n'){
  alert('I am personally offended, but you do you.');
} else {
  alert('I\'ll take that as a yes.');
};
