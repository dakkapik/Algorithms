const nums3 = [2,3,1,1,4]
const nums4 = [1,3,2]

console.log(jumpGame(nums3))

function jumpGame (nums){
    let jumps = 0;
    let currentPosition = 0;
    let jumpLength = nums[currentPosition];

    setInterval(()=> {
        
        let highestJumpValueIndex = 0        
        console.log(currentPosition)

        for(let i = currentPosition + jumpLength; i > currentPosition; i--){
            console.log("jump reach: ", i + nums[i])
            console.log(i + nums[i] === nums.length)

            const finalJump = nums[i + nums[i]] === undefined || i + nums[i] === nums.length
            if(finalJump){
                return jumps + 1
            } 

            if(i - currentPosition + nums[i] > i - currentPosition + nums[highestJumpValueIndex]) highestJumpValueIndex = i

        }
        currentPosition = highestJumpValueIndex
        jumps ++;
    }, 500)


    // while(nums.length !== 1){
        
    // }
    return jumps
}

module.exports = jumpGame
