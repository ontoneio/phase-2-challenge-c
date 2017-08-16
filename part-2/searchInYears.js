const fs = require('fs')

let yearRange = process.argv[2]
let carsFile = fs.readFileSync('./cars.json', 'utf8')
let yearsAsNumber = []


if (!checkYearRangeisValid()) 
    { 
        console.error('\nNo valid arguments passed.\nPlease specify a year range as YYYY-YYYY format\n')
    }

else{   
        console.log(`\nFinding cars made between ${yearRange}...\n`);
        getCarByYear(yearRange, carsFile) 
    }


    
function checkYearRangeisValid() {
        
    let yearRangeFormat = /^(\d{4})-(\d{4})/g.test(yearRange)

    if (!yearRangeFormat) {
        return false
    }
    else {        
        return true
    }   
}

function splitYearRange(yearRange) {
    let yearRangeSplit = yearRange.split('-')
    let yearLower = parseInt(yearRangeSplit[0], 10)
    let yearUpper = parseInt(yearRangeSplit[1], 10)

    return yearsAsNumber = [yearLower, yearUpper]
}

function formatJSONreviver(propertyName, propertyValue) {
    
    if (propertyName === "vin" || propertyName === "last_owner" || propertyName === "date_purchased") {
        return undefined;
    }
    return propertyValue 
}


function getCarByYear(yearRange, carFile) { 
    
    let parsedFile = JSON.parse(carsFile, formatJSONreviver, 1)
    let yearsAsNumber = splitYearRange(yearRange)


    let foundModels = parsedFile.filter((carModel) => {
        if (carModel.year <= yearsAsNumber[1] && carModel.year >= yearsAsNumber[0]) {
            return carModel
            }       
        }
    )

        if (foundModels.length === 0) {
            console.warn(`\nNo models found within "${yearRange}"...\n`);
    }
        else {
            console.log(foundModels);        
    }
}