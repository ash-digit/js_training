
const numbers = [3,2,2,3]

var removeElement = function(nums, val) {
    let k = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
console.log(removeElement(numbers, 2));

