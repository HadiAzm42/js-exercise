// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ["Admin", "Abdullah", "Ali", "Hassan", "Rizwan"];
let new_users = ["Tahir", "Adeel", "Humail", "Zakki", "Mujtaba"];

for (i=new_users.length; i>0; i--) {
    let name_available = true;
    for(j=current_users.length; j>0; j--) {
        if (new_users[i-1].toLowerCase()==current_users[j-1].toLowerCase() && name_available) {
                console.log(`Hello ${new_users[i-1]}! this username is not available.`);
                name_available=false;                
            }
        }
        if(name_available) {
            console.log(`Hello ${new_users[i-1]}! proceed to account creation, please.`);
        }
    }
