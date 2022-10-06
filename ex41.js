// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magicians = ["Doug Henning", "Penn and Teller", "Lance Burton", "Ricky Jay"];

function show_magicians(m){
    // console.log(typeof(m));
    m.map(x=>console.log(x));
}

show_magicians(magicians);