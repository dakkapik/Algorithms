const expect = require("chai").expect
const fn = require("../longestPalindromicSubstring/longestPalindromicSubstring")

describe("longestPalindromicSubstring => Should return the longest string that can be mirrored on it's axis", function(){
    
    it("Given babad, should return aba", function(){
        const result = fn("babad")
        expect(result).eql("aba")
    })

    it("Given cbbd, should return bb", function(){
        const result = fn("cbbd")
        expect(result).eql("bb")
    })
    
})