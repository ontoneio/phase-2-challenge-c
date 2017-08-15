module.exports = {

    weekday(date) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const callableDate = Object.prototype.toString.call(date)

        if (!callableDate === '[object Date]' || arguments.length === 0) { 
            throw new Error("Function takes Date object for function argument")
        }
        else {
            return daysOfWeek[date.getDay()]            
        }
    },

    capitalizeFourth(string) {
        const lowerCaseString = string.toLowerCase()
        var result = ''

        if (typeof string !== 'string' || arguments.length === 0){
            throw new TypeError('Function takes string type argument')
        }
        else {
            for (var letter = 0; letter < lowerCaseString.length; letter++) {
                result += (letter + 1) % 4 === 0 
                ? lowerCaseString[letter].toUpperCase() 
                : lowerCaseString[letter];            
            }
            return result
        }

    },

    getValues(obj) {
        const callableObject = Reflect.getPrototypeOf(obj)

        if(!callableObject || Array.isArray(obj) || arguments.length === 0){
            throw new TypeError("Function takes Object type arguments only")
        }
        else {
            return Object.values(obj)
        }
    },

    filterAround(array, lower, upper) {

        if (arguments.length < 3){
            throw new Error('Function needs 3 arguments')
        }
        else if (!Array.isArray(array || typeof lower && upper !== 'string')) {
            throw new Error('Function takes [Array, String, String] as arguments')
        }
        else if (array.some((item) => typeof item !== 'string')) {
            throw new Error('Array needs to have string item data types as members only')
        }
        else {
            let lowerRange = array.filter((item) => item < lower )
            let upperRange = array.filter((item) => item > upper )
            return lowerRange.concat(upperRange)
        }
    }

}