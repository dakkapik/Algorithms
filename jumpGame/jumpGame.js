const nums = [2,3,1,1,4]
const nums2 = [2,1]
const nums3 = [2,3,1,1,4]
const nums4 = [1,3,2]

function jumpGame (nums){
    let jumps = 0;
    let currentPosition = 0;
    let jumpLength = nums[currentPosition];

    while(nums.length !== 1){
        jumps ++
        let highestJumpValueIndex = 0

        for(let i = currentPosition + jumpLength; i > currentPosition; i--){

            const finalJump = nums[i + nums[i]] === undefined || nums[i] + i === nums.length
            if(finalJump) return jumps + 1

            if(i - currentPosition + nums[i] > i - currentPosition + nums[highestJumpValueIndex]) highestJumpValueIndex = i

        }
        currentPosition = highestJumpValueIndex
        // console.log("still running")
    }
    return jumps
}

module.exports = jumpGame
