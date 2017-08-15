module.exports = {

    weekday(date) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const callableDate = Object.prototype.toString.call(date)

        if (!callableDate === '[object Date]') { 
            throw new Error("Not a proper Date object for function argument")
        }
        else {
            console.log(daysOfWeek[date.getDay()]);                    
            return daysOfWeek[date.getDay()]            
        }
    },

    capitalizeFourth(string) {

    },

    getValues(obj) {

    },

    filterAround(array, lower, upper) {

    }

}