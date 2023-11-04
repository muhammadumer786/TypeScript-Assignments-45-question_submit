// //question 38 - done here.
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_City(cityName:string, countryName:string="pakistan"):void{
    console.log(`${cityName} is in ${countryName}`);
}

describe_City("Karachi","Pakistan");
describe_City("Lahore");
describe_City("Islamabad");
