// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(ct, cn){
    console.log(`${ct}, ${cn}`);
}

var city1 = "Islamabad";
var country1 = "Pakistan";
var city2 = "Karachi";
var country2 = "Pakistan";
var city3 = "Madina";
var country3 = "Kingdom of Saudi Arabia";

city_country(city1, country1);
city_country(city2, country2);
city_country(city3, country3);

