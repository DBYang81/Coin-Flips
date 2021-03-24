/**  
 Orientation - JS assignment 1
 Solution by: [Dongbin Yang]
 */


let choiceListArray = [];
let historyFlipArray = [];
let amountOfGame = 0;
let amountOfWins = 0;

//function for reading user's input values from html form 
const checkUserChoice = function () {
  const userChoice = document.querySelector('input[name="user-choice"]:checked').value;
  console.log('user choice', userChoice);
  choiceListArray.push(userChoice);
  return userChoice;
}

// Add functionality to button by binding a button click event and a listener function
const throwButton = document.querySelector('#throw-button');
throwButton.addEventListener('click', checkUserChoice,);



function value () {
  const randomValue = Math.random() * 2; 
  const coinFlip = Math.floor(randomValue); 
  // console.log (coinFlip);
  return coinFlip;
}
//let coinFlip = value();
throwButton.addEventListener('click', value,);



// Get reference to html element with id "coin-image"
const coinImage = document.querySelector('#coin-image');
//flip the coin
function tossCoin () {

  if (value() == 0) {
    coinImage.src = 'head.png';
    coinFlip= 'head';
    console.log('coin flip result:', coinFlip); 
    historyFlipArray.push(coinFlip);
  }
  else {
    coinFlip ='reverse';
    coinImage.src = 'reverse.png';
    console.log('coin flip result:', coinFlip);
    historyFlipArray.push(coinFlip);
  }
  const resultHistory = document.querySelector('#result-history');
  resultHistory.innerHTML = '<strong>Flip:</strong>' + historyFlipArray + "<br>" +'<strong>User:</strong>' + choiceListArray; 
}
throwButton.addEventListener('click', tossCoin,);



//compare the userchoice and flip result
function winAndLoss () {
  if ( historyFlipArray [amountOfGame]== 'head' && choiceListArray [amountOfGame] == 'head') {
    amountOfWins++;
    console.log(amountOfWins);
  } 
  else if(historyFlipArray [amountOfGame] == 'reverse' && choiceListArray [amountOfGame] == 'reverse'){
    amountOfWins++; 
    console.log(amountOfWins);
  }
  amountOfGame++;
  //console.log(amountOfGame);
  const amountOfWinsResult = document.querySelector('#win-count');
  amountOfWinsResult.textContent = (amountOfWins + '/'+ amountOfGame);
}
throwButton.addEventListener('click', winAndLoss,);


let count= 0;
let time = 0;
function headOrReverse () {
  if (historyFlipArray [amountOfGame - 1] == 'head') {
    count++;
    console.log(count);
  }
  else if (historyFlipArray [amountOfGame - 1] == 'reverse') {
    time++;
    console.log(time);
  }
  const amountOfHead = document.querySelector('#head-count');
  amountOfHead.textContent = (count);
  const amountOfReverse = document.querySelector('#reverse-count');
  amountOfReverse.textContent = (time);
}
throwButton.addEventListener('click', headOrReverse,);


let text;
function texts () {
  if (historyFlipArray [amountOfGame - 1] == choiceListArray[amountOfGame - 1]) {
    text = 'Lucky you!';
    console.log('Winner');
  }
  else {
    text = 'Bad luck, try again!' ;
    console.log('Loser');
  }
  const resultParagraph = document.querySelector('#result');
  resultParagraph.textContent = text; 
}
throwButton.addEventListener('click', texts,);
