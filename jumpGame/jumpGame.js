const nums = [2,3,1,1,4]
const nums2 = [2,1]
const nums3 = [2,3,1,1,4]

console.log(jumpGame(nums3))

function jumpGame (nums){
    let jumps = 0;
    let jumpPoint = 0;
    let jumpLength = nums[0];

    while(nums.length !== 1){
        let higherValueIndex = 0
        jumps++
        for(let i = jumpLength + jumpPoint; i > jumpPoint; i--){
            let higher
            // NEED TO GET THE VALUE OF THE JUMP NOT THE INDEX
            if(nums[i] !== undefined){
                let currentPoint = jumpPoint + jumpLength
                let jumpValue = currentPoint - i

                if(nums[i] - (jumpPoint + jumpLength - i) > nums[higherValueIndex] - (jumpPoint + jumpLength - i)) higherValueIndex = i

            }else{
                console.log(nums[i])
                return jumps
            }
        }
    
        jumpPoint = higherValueIndex
        jumpLength = nums[higherValueIndex]
    }
}


