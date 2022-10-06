// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames = ["Admin", "Abdullah", "Ali", "Hassan", "Rizwan"];

for (i=usernames.length; i>0; i--) {
    if (usernames[i-1]!=='Admin') {
        console.log(`Hello ${usernames[i-1]}! welcome back to our zone.`);
    } else {
        console.log(`Hello ${usernames[i-1]}! would you like to se a status report.`);
    }
};