var searchInsert = function(nums, target) {
    if(target === 0 || nums.indexOf(target + 1 === 1)){
        return 0;
    }
    if(nums.indexOf(target) != -1){
        return nums.indexOf(target)
    }else if(target < nums[nums.length - 1]){
        let x = 0;
        if(nums.indexOf(target - 1) != -1){
            x = 1;
        }
        const indexOfInsertion = nums.indexOf(target + 1 )
        if(indexOfInsertion === -1 || indexOfInsertion === 0){
            return 1 + x
        }
        return indexOfInsertion;
    }else{
        nums.push(target)
        return nums.indexOf(target)
    }
    
};

const nums1 = [3,4,9,10]
// const nums2 = [1,2,6];//target 4
console.log(searchInsert(nums1, 5))