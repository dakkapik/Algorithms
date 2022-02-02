function jumpGame (nums){
    let jumps = 0;
    let currentPosition = 0;
    
    while(nums.length !== 1){
        let jumpLength = nums[currentPosition];
        let highestJumpValueIndex = currentPosition + 1;
        let reach = currentPosition + jumpLength
        let atEnd = reach >= nums.length - 1

        if(atEnd) return jumps + 1
    
        for(let i = reach; i > currentPosition; i--){
            const thisReach = i + nums[i]
            const highestReach = highestJumpValueIndex + nums[highestJumpValueIndex]
            if(thisReach > highestReach) highestJumpValueIndex = i
        }
        
        jumps ++;
        currentPosition = highestJumpValueIndex
        jumpLength = nums[currentPosition]
        reach = currentPosition + jumpLength
        atEnd = reach >= nums.length - 1

        if(atEnd) return jumps + 1
    }
    return jumps = 0
}

module.exports = jumpGame
