// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicians = ["Doug Henning", "Penn and Teller", "Lance Burton", "Ricky Jay"];
var new_magicians = magicians.map(x=> "The Great " + x);

function show_magicians(m){    
    m.map(x=>console.log(x));
}

function make_great(m) {    
    m.map(x=>console.log(x));
}

show_magicians(magicians);
make_great(new_magicians);