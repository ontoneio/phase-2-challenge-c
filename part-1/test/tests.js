const p2 = require('../functions')
const expect = require('chai').expect

describe("Phase 2-c part-1 functions", function() {
    
    context("weekday()", function() {
        it("Returns the day of the week as a string from a valid Date Object", function() {

            const validDate1 = new Date(1987, 1, 1) // Should Return Thursday
            const validDate2 = new Date(2017, 4, 24) // Should Return Monday
            const validDate3 = new Date(1999, 7, 4) // Should Return Sunday

            const validTest1 = p2.weekday(validDate1)
            const validTest2 = p2.weekday(validDate2)
            const validTest3 = p2.weekday(validDate3)

            expect(validTest1).to.be.equal('Thursday')
            expect(validTest2).to.be.equal('Monday')
            expect(validTest3).to.be.equal('Sunday')
            
        })
    })
    context("weekday()", function() {
        it("Checks that function throws error when not given a proper Date Object type of argument", function() {
            
            const invalidDate1 = 'January 1st, 1987'
            const invalidDate2 = 20170424
            const invalidDate3 = new Date('Not a real date')

            const invalidTest1 = () => p2.weekday(invalidDate1)
            const invalidTest2 = () => p2.weekday(invalidDate2)
            const invalidTest3 = () => p2.weekday(invalidDate3)

            expect(invalidTest1).to.throw(Error)
            expect(invalidTest2).to.throw(Error)
            expect(invalidTest3).to.throw(Error)
        })
    })

    context("capitalizeFourth()", function() {
        it("Takes a string and returns every 4th character converted to upper case and the rest converted to lower case", function() {
            
            const validString1 = 'This is a valid string to parse'
            const validString2 = 'Another String OF ALL KINDS of letters'
            const validString3 = 'Open SAYS A ME'

            const validTest1 = p2.capitalizeFourth(validString1)
            const validTest2 = p2.capitalizeFourth(validString2)
            const validTest3 = p2.capitalizeFourth(validString3)

            expect(validTest1).to.be.equal('thiS is a vAlid strIng To pArse')
            expect(validTest2).to.be.equal('anoTher strIng Of aLl kInds of LettErs')
            expect(validTest3).to.be.equal('opeN saYs a me')

        })
    })
    context("capitalizeFourth()", function() {
        it("Checks that function throws error when not given a proper string type of argument", function() {

            const invalidType1 = 2005
            const invalidType2 = ['An', 'Invalid', 'Array']
            const invalidType3 = {'some': 1, 'object': 2, 'literal': 3}

            const invalidTest1 = () => p2.capitalizeFourth(invalidType1)
            const invalidTest2 = () => p2.capitalizeFourth(invalidType2)
            const invalidTest3 = () => p2.capitalizeFourth(invalidType3)
            
            expect(invalidTest1).to.throw(Error)
            expect(invalidTest2).to.throw(Error)
            expect(invalidTest3).to.throw(Error)
        })
    })

    context("getValues()", function() {
        it("Returns all own values from given object argument", function() {
            
        })
    })
    context("getValues()", function() {
        it("Checks that function throws error when not given a proper object type of argument", function() {
            
        })
    })

    context("filterAround()", function() {
        it("returns a new array containing only the elements from the source array that come before lower alphabetically and after upper", function() {
            
        })
    })
    context("filterAround()", function() {
        it("Checks that function throws error when not given a proper types of arguments", function() {
            
        })
    })
})