// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users = [];

if (users.length==0) {
    console.log("We need to add new users!");
} else {
    for (i=users.length; i>0; i--) {
        if (users[i-1]!=='Admin') {
            console.log(`Hello ${users[i-1]}! welcome back to our zone.`);            
        } else {
            console.log(`Hello ${users[i-1]}! would you like to se a status report.`);
        }
    }
}