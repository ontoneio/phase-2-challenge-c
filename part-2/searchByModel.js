const fs = require('fs')

let carModel = process.argv[2]
let carsFile = fs.readFileSync('./cars.json', 'utf8')


if (!carModel) { console.error('\nNo arguments passed.\nPlease specify a model of car :-)\n')}

else{   console.log(`\nFinding cars with model "${carModel}"...\n`); 
        getCarByModel(carModel, carsFile) }


function formatJSONreviver(propertyName, propertyValue) {
    
    if (propertyName === "make" || propertyName === "vin") {
        return undefined;
    }
    return propertyValue 
}        

function getCarByModel(carModel, carFile) { 
    
    let parsedFile = JSON.parse(carsFile, formatJSONreviver)
    let carModelCase = carModel.toLowerCase()

    let foundModels = parsedFile.filter((carModel, index) => {
        if(carModel.model.toLowerCase() === carModelCase) {
            return carModel
            }        
        }
    )

    if (foundModels.length === 0) {
        console.warn(`No models found with name "${carModel}"...\n`);
    }
    else {
        console.log(foundModels);        
    }
}