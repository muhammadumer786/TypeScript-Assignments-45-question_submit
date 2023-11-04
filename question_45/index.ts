// question 45- done here
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface CarInformation {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function storeCarInformation(manufacturer: string, modelName: string, ...additionalInfo: any[]): CarInformation {
    const carInfo: CarInformation = {
        manufacturer,
        modelName
    };

    for (let i = 0; i < additionalInfo.length; i += 2) {
        const key = additionalInfo[i];
        const value = additionalInfo[i + 1];
        carInfo[key] = value;
    }

    return carInfo;
}


const car1 = storeCarInformation('Toyota', 'Corolla', 'colour', 'blue', 'fuelType', 'petrol');
console.log(car1);
const car2 = storeCarInformation('Honda', 'Civic', 'colour', 'black', 'fuelType', 'petrol');
console.log(car2);
const car3 = storeCarInformation('Toyota', 'Aqwa', 'colour', 'grey', 'fuelType', 'hybrid');
console.log(car3);
