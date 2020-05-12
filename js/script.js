/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author - Matt Lausche
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Array of random quotes objects to be used in random quote generation
***/
let quotes = [
  {quote: 'Your potential, the absolute best you’re capable of—that’s the metric to measure yourself against. Your standards are. Winning is not enough. People can get lucky and win. People can be assholes and win. Anyone can win. But not everyone is the best possible version of themselves.', source: 'Ryan Holiday'},
  {quote: 'Impressing people is utterly different from being truly impressive.', source: 'Ryan Holiday'},
  {quote: 'Think progress, not perfection.', source: 'Ryan Holiday'},
  {quote: 'Even the most thorough change happens once choice at a time', source: 'Charles Eisenstein', year: '2003'},
  {quote: 'We\'re here to awaken from the illusion of separateness', source: 'Ram Dass', citation: 'How Can I help'}
];



/***
 * Function to generate a random number and return the number used to select the quote
***/
function getRandomQuote() {
  randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
 * Function to create the quote string with HTML and print
***/

function printQuote() {
  let finalQuote = getRandomQuote();
  console.log(finalQuote);
  let quoteString = '<p class="quote">' + finalQuote.quote;
  quoteString += '</p>'  + '<p class"source">' + finalQuote.source;

  if ( finalQuote.citation !== undefined) {
    quoteString +=  '<span> ' + finalQuote.citation + '</span>';
  }
  if (finalQuote.year !== undefined) {
    quoteString += '<span> ' + finalQuote.year + '</span>';
  }
  quoteString += '</p>'

  console.log(quoteString);

document.getElementById('quote-box').innerHTML = quoteString;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
