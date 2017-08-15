module.exports = {

    weekday(date) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const callableDate = Object.prototype.toString.call(date)

        if (!callableDate === '[object Date]') { 
            throw new Error("Not a proper Date object for function argument")
        }
        else {
            return daysOfWeek[date.getDay()]            
        }
    },

    capitalizeFourth(string) {
        const lowerCaseString = string.toLowerCase()
        var result = ''

        if (typeof string !== 'string'){
            throw new TypeError('Function takes string type arguement')
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

        if(!callableObject || Array.isArray(obj)){
            throw new TypeError("Function takes Object type arguements only")
        }
        else {
            return Object.values(obj)
        }


    },

    filterAround(array, lower, upper) {

    }

}