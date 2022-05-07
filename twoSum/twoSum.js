var twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    
    for(let i = 0; i < nums.length; i++){
        const complementIndex = map.get(target - nums[i])
        if(complementIndex && complementIndex !== i) {
            return [i, complementIndex]
        }
    }
};
