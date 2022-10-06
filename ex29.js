// Exercise 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruits = ["Banana", "Orange", "Apple", "Mango"];

for (i=favourite_fruits.length; i>-1; i--) {
    console.log(`${favourite_fruits[i-1]} is my favourite fruit and it is present in the list`);
};
