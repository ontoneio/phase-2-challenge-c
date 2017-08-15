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

        if (typeof string !== 'string'){
            throw new TypeError('Function takes string type arguement')
        }

        const lowerCaseString = string.toLowerCase()
        var result = ''

        for (var letter = 0; letter < lowerCaseString.length; letter++) {
            result += (letter + 1) % 4 === 0 ? lowerCaseString[letter].toUpperCase() : lowerCaseString[letter];            
        }
        return result
    },

    getValues(obj) {

    },

    filterAround(array, lower, upper) {

    }

}