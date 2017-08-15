const p2 = require('../functions')
const expect = require('chai').expect

describe("Phase 2-c part-1 functions", function() {
    
    context("weekday()", function() {
        it("Returns the day of the week as a string from a valid Date Object", function() {

            const validDate1 = new Date('January 01, 1987, 08:30:30') // Should Return Thursday
            const validDate2 = new Date(2017, 3, 24) // Should Return Monday
            const validDate3 = new Date(1999, 6, 04) // Should Return Sunday

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
            
            const invalidDate1 = 'Four score and seven years ago'
            const invalidDate2 = 20170424097890709790789780
            const invalidDate3 = new Date('Not a real date')

            const invalidTest1 = p2.weekday.bind(invalidDate1)
            const invalidTest2 = p2.weekday.bind(invalidDate2)
            const invalidTest3 = p2.weekday.bind(invalidDate3)

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
            
            expect(invalidTest1).to.throw(TypeError)
            expect(invalidTest2).to.throw(TypeError)
            expect(invalidTest3).to.throw(TypeError)
        })
    })

    context("getValues()", function() {
        it("Returns all own values from given object argument", function() {

            const validObj1 = {'first': 1, 'second': 2, 'third': 3}
            const validObj2 = {'name': 'Jonny', 'height': 6, 'pets': ['turtle', 'cat', 'dog']}
            const validObj3 = {'make': 'Honda', 'model': ['Accord', 'Civic', 'Pilot'], 'Running': true}

            const validTest1 = p2.getValues(validObj1)
            const validTest2 = p2.getValues(validObj2)
            const validTest3 = p2.getValues(validObj3)

            expect(validTest1).to.be.an('array').to.have.deep.members([1, 2, 3])
            expect(validTest2).to.be.an('array').to.have.deep.members(['Jonny', 6, ['turtle', 'cat', 'dog']])
            expect(validTest3).to.be.an('array').to.have.deep.members(['Honda',['Accord', 'Civic', 'Pilot'], true])
            
        })
    })
    context("getValues()", function() {
        it("Checks that function throws error when not given a proper object type of argument", function() {

            const invalidObj1 = 'Invalid string for function'
            const invalidObj2 = 30002500600
            const invalidObj3 = ['Array', 'is object', 'but not a valid', 1]

            const invalidTest1 = () => p2.getValues(invalidObj1)
            const invalidTest2 = () => p2.getValues(invalidObj2)
            const invalidTest3 = () => p2.getValues(invalidObj3)
            
            expect(invalidTest1).to.throw(Error)
            expect(invalidTest2).to.throw(Error)
            expect(invalidTest3).to.throw(Error)

        })
    })

    context("filterAround()", function() {
        it("returns a new array containing only the elements from the source array that come before lower alphabetically and after upper", function() {

            const validArg1 = ['A', 'B', 'C', 'D', 'J', 'K', 'L', 'M', 'T', 'U', 'V', 'W']
            const validArg2 = ['apple', 'banana', 'carrot', 'fennel','mango', 'orange', 'pears', 'radish', 'tomato', 'yam' ]
            const validArg3 = ['T', 'U', 'V', 'W', 'J', 'K', 'L', 'M', 'A', 'B', 'C', 'D']
            const validArg4 = [ 'orange', 'pears', 'radish', 'tomato', 'yam', 'apple', 'banana', 'carrot', 'fennel','mango',]
            
            const validTest1 = p2.filterAround(validArg1, 'E', 'O')
            const validTest2 = p2.filterAround(validArg2, 'carrot', 'radish')
            const validTest3 = p2.filterAround(validArg3, 'E', 'O')
            const validTest4 = p2.filterAround(validArg4, 'carrot', 'radish')
            const validTest5 = p2.filterAround(validArg2, 'aardvark', 'zebra')

            expect(validTest1).to.be.an('array').to.have.deep.members(['A', 'B', 'C', 'D', 'T', 'U', 'V', 'W'])
            expect(validTest2).to.be.an('array').to.have.deep.members(['apple', 'banana', 'tomato', 'yam'])
            expect(validTest1).to.be.an('array').to.have.deep.members(['T', 'U', 'V', 'W', 'A', 'B', 'C', 'D'])
            expect(validTest4).to.be.an('array').to.have.deep.members([ 'tomato', 'yam','apple', 'banana'])
            expect(validTest5).to.be.an('array').to.deep.equal([])

        })
    })
    context("filterAround()", function() {
        it("Checks that function throws error when not given a proper types of arguments", function() {

            const invalidArg1 = 30002500600
            const invalidArg2 = 'Not a valid arg for function'
            const invalidArg3 = {'nothingness': 0, 'blackhole': NaN}
            const invalidArg4 = true
            const invalidArg5 = NaN
            const invalidArg6 = 'cats'
            const invalidArg7 = 'Walrus'
            const invalidArg8 = new Object()
            const invalidArg9 = new Array()
            const invalidArg10 = ['An', 'Array', 'of', 'Stuff']
            const invalidArg11 = [ 1, false, NaN, {'SomeObj': 15}]
            const invalidArg12 = [ NaN, 'str', [], true]

            

            const invalidTest1 = () => p2.filterAround(invalidArg1, invalidArg4, invalidArg6 )
            const invalidTest2 = () => p2.filterAround(invalidArg2, invalidArg5, invalidArg7)
            const invalidTest3 = () => p2.filterAround(invalidArg3, invalidArg8, invalidArg9)
            const invalidTest4 = () => p2.filterAround(invalidArg10)
            const invalidTest5 = () => p2.filterAround(invalidArg11, 'catch', 'test')
            const invalidTest6 = () => p2.filterAround(invalidArg12, 'error', 'sweat')

            expect(invalidTest1).to.throw(Error)
            expect(invalidTest2).to.throw(Error)
            expect(invalidTest3).to.throw(Error)
            expect(invalidTest4).to.throw(Error)
            expect(invalidTest5).to.throw(Error)
            expect(invalidTest6).to.throw(Error)
            
        })
    })
})