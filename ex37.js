// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(t, s='large'){
    console.log(`You have ordered ${s.toUpperCase()} size shirt with following message printed on it\n\t${t}.`);
}

var size = "medium";
var text = "I love JavaScript";
var text2 = "I am learning NextJS";

make_shirt(text);
make_shirt(text, size);
make_shirt(text2, "free");

