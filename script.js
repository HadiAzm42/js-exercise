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

// Exercise 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

var famous_person = 'Harvey Mackay';
var famous_quote = 'People begin to become successful the minute they decide to be.';
var finalmessage = famous_person + " once said" + ' "' + famous_quote + '"';
console.log(finalmessage);


// Exercise 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var person_name = "\tUmar \nYahya"

console.log(person_name);

var remove_space = person_name.replace(/\t/, "");
var remove_space = remove_space.replace(/\n/, "");

console.log(remove_space);

// Exercise 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(4+4);
console.log(15-7);
console.log(2*4);
console.log(16/2);

// Exercise 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var Favourite_Number = 42;
console.log("My Favourite number is", Favourite_Number);


// Exercise 10
// Adding Comments

// Number 8
// We have to do simple operations such as addition, subtraction, multiplication and division to get the result 8 in console log.


// Exercise 11
// Select each element in an array

var friends = ['Arham', 'Suleman', "Ali", "Rizwan", "Huzaifa"];

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);

// Exercise 12
// Welcome message to each element

friends.map(x => console.log(`Hi ${x}, Have a great time here.`));


// Exercise 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var Transport = ['Car', 'Jet', 'Motor Bike', 'Bicycle'];

Transport.map(x => console.log(`My Favourite type of Transport is ${x}.`));

// Exercise 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var guests = ['Muhammad Rizwan', 'Malik Farhat', 'Suleman Rehan', 'Muhammad Yahya'];

guests.map(x => console.log(`Hey ${x}, You are invited to dinner at our house today.`));

// Exercise 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

guests[(guests.indexOf('Azlan Jilaani'))]='Abdurehman';

guests.map(x=> console.log(`Hey ${x}, I invite you to dinner at our house today.`));

guests.unshift('Ikram Mohammad');

guests.push('Zaheen Masood');

guests.splice(guests.length/2, 0, 'Subhan Azeemi');

guests.map(x=> console.log(`Hey ${x}, You are invited to dinner at our house today.`));