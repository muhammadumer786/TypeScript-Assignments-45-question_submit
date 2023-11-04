// question 45- done here
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInformation(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (var i = 0; i < additionalInfo.length; i += 2) {
        var key = additionalInfo[i];
        var value = additionalInfo[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
var car1 = storeCarInformation('Toyota', 'Corolla', 'colour', 'blue', 'fuelType', 'petrol');
console.log(car1);
var car2 = storeCarInformation('Honda', 'Civic', 'colour', 'black', 'fuelType', 'petrol');
console.log(car2);
var car3 = storeCarInformation('Toyota', 'Aqwa', 'colour', 'grey', 'fuelType', 'hybrid');
console.log(car3);
