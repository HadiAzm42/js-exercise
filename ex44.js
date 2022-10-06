// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


let items = ["Egg", "Mayo", "Tomato", "Bread"];

function make_sandwich(...args){    
    console.log('Following items are being added to your sandwich:');
    for (const x in args) {        
        console.log(items[x]);
    }
}

make_sandwich(0, 1);
make_sandwich(0, 1, 2);
make_sandwich(0, 1, 2, 3);