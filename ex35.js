// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals = ["Cow", "Goat", "Sheep"];

for (i=0; i<animals.length; i++) {
    console.log(`${animals[i]}`);    
}
for (i=0; i<animals.length; i++) {
switch (animals[i]) {
    case "Cow":    
      console.log("Cow gives us milk.");
      break;
    case "Goat":    
      console.log("Goats give us meat.");
      break;
    case "Sheep":    
      console.log("Sheep give us wool.");
      break;    
  }
}
console.log("\t\tAll above mentioned animals are beneficial for humans.");
