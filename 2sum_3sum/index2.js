// Two Sum - My Ans using linear search O(n^2) time complexity
var twoSum = function(nums, target) {
    let array = []
    for(let i=0; i<nums.length; i++){
        let complement = target-nums[i]
        if(array.includes(complement)){ // linear search
            return [nums.indexOf(complement),i] //linear search may harm on duplicate
        }else{
            array.push(nums[i])
        }
    }
    
};
// Using Object
var twoSum = function(nums, target) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in obj) {
            return [i, obj[target - num]];
        }
        obj[num] = i;
    }    
};
// Two Sum - Best Ans using Map has and get
   var twoSum = function(nums, target) {
    const used = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (used.has(diff)) {
            return ([used.get(diff), i]);
        }

        used.set(nums[i], i);
    }
};