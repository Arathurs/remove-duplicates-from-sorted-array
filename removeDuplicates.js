/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    if (nums.length < 2) {
        return nums.length;
    }
    let count = nums.length - 1;
    while (count > 0) {
        if (nums[count] === nums[count - 1]) nums.splice(count, 1);
        --count;
    }
    return nums.length;
};