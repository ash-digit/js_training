var searchInsert = function(nums, target) {
    if(nums.indexOf(target) != -1){
        console.log(target, "already exists")
        return nums.indexOf(target)
    }else if(target < nums[nums.length - 1]){// if the target in smaller than the last number in the nums array
       if(nums[nums.indexOf(target - 1)] || target < nums[0]){ // to the left
        console.log("to the left")
        return nums.indexOf(target - 1) + 1 
       }else if(nums[nums.indexOf(target + 1)]){ // to the right
        console.log("to the right")
        return nums.indexOf(target + 1)
       }
       
       
    }else{ // if the target is bigger than the last number in the numbs array
        nums.push(target)
        console.log("a push needed")
        return nums.indexOf(target)
    }
    
};

const nums1 = [3,4,9,10]
console.log(searchInsert(nums1, 5))

console.log("-----------------------")
const nums2 = [3,4,9,10]
console.log(searchInsert(nums1, 2))

console.log("-----------------------")
const nums3 = [3,4,9,10]
console.log(searchInsert(nums1, 12))

console.log("-----------------------")
const nums4 = [3,4,9,10]
console.log(searchInsert(nums1, 0))

console.log("-----------------------")
const nums5 = [5,6,8,10]
console.log(searchInsert(nums5, 1))

console.log("-----------------------")
nums6 = [-1,3,5,6];
console.log(searchInsert(nums6, 0))