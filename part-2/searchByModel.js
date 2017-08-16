const fs = require('fs')

let carModel = process.argv[2]

let carsFile = fs.readFileSync('./cars.json', 'utf8')


if (!carModel) { console.error('No arguments passed.\n Please specify a model of car :-)')}

else{   console.log(`Finding cars with model "${carModel}"...\n\n`); 
        getCarByModel(carModel, carsFile) }

function getCarByModel(carModel, carFile){   

    function formatJSONreviver(propertyName, propertyValue) {
        if (propertyName === "make" || propertyName === "vin") {
            return undefined;
        }
        return propertyValue
    }

    let parsedFile = JSON.parse(carsFile, formatJSONreviver)

    console.log(parsedFile)

    let carModelCase = carModel.toLowerCase()
    let carFileCase

    let resultsFound = []
    let foundModel = {}
}

    

/* 
function compares (string, object.Value) for equality {

    JSON.parses(object)

}

id
model
year
last_owner
date_purchased


"id": 1,
"make": "Volkswagen",
"model": "Jetta",
"year": 2011,
"vin": "3573499720689269",
"last_owner": "Kaylil Minico",
"date_purchased": "7/3/2016"
*/
