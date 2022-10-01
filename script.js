// First Exercise (2)
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var name = 'Hadi';

console.log(`Hello ${name}, would you like to learn some Python today?`);

// Second Exercise (3)
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


var myName = "This is my text";
var lower = myName.toLowerCase();
var upper = myName.toUpperCase();


// Word splitting
var splittedName = lower.split(" ");

// make each word in the name to title case
var titleCase = splittedName.map(
    x => x.replace(x[0], x[0].toUpperCase())
);


// Words joining after function
var title = titleCase.join(' ');

// print name in different cases
console.log(`The Text in lower case :- ${lower}`);
console.log(`The Text in upper case :- ${upper}`);
console.log(`The Text in title case :- ${title}`);


// Exercise 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”

var Author = 'Napoleon Hill';
var quote = 'The ladder of success is never crowded at the top.';
console.log(`${Author} once said "${quote}"`);
