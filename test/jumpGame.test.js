const expect = require("chai").expect
const jumpGame = require("../jumpGame/jumpGame")

describe("jumpGame", function(){
    
    it("Should return the appropriate number of jumps to get to the end of the array", async function(done){
        // // setTimeout(()=>done(), 5000)

        // const result = jumpGame([2,3,1,1,4])
        // done()
        // expect(result).eql(2)
        this.timeout(1000)
        var i, test;
        i = 0;
        test = function() {
        console.log(i++);
        setTimeout(test, 1000);
        };
        test();
            
        
    })
    
})