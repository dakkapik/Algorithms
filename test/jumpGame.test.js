const expect = require("chai").expect
const jumpGame = require("../jumpGame/jumpGame")

describe("jumpGame", function(){
    this.timeout(10000)

    it("Given [0], Should return 0 jumps",function(){
        const result = jumpGame([0])
        expect(result).eql(0)
    })

    it("Given [2,1], Should return 1 jumps",function(){
        const result = jumpGame([2,1])
        expect(result).eql(1)
    })

    it("Given [1,2], Should return 1 jumps",function(){
        const result = jumpGame([1,2])
        expect(result).eql(1)
    })

    it("Given [3,2,1], Should return 1 jumps",function(){
        const result = jumpGame([3,2,1])
        expect(result).eql(1)
    })

    it("Given [2,3,1,1,4], Should return 2 jumps",function(){
        const result = jumpGame([2,3,1,1,4])
        expect(result).eql(2)
    })
    
    it("Given [1,3,2], Should return 2 jumps",function(){
        const result = jumpGame([1,3,2])
        expect(result).eql(2)
    })
    
    it("Given [1,2,3], Should return 2 jumps",function(){
        const result = jumpGame([1,2,3])
        expect(result).eql(2)
    })
    
    it("Given [1,1,1,1], Should return 3 jumps",function(){
        const result = jumpGame([1,1,1,1])
        expect(result).eql(3)
    })
})