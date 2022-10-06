// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magicians = ["Doug Henning", "Penn and Teller", "Lance Burton", "Ricky Jay"];

function show_magicians(m){    
    m.map(x=>console.log(x));
}

function make_great(m) {
    // var great_magicians = m.map(x=>x + " the Great ");
    m.map(x=>console.log(`the Great ${x}`));
}

show_magicians(magicians);
make_great(magicians);