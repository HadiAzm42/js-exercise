// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(s, t){
    console.log(`You have ordered ${s.toUpperCase()} size shirt with following message printed on it\n\t${t}.`);
}

var size = "medium";
var text = "I am Reactive";
make_shirt(size, text);
