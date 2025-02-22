var threeSum = function(nums) {
    nums.sort((a, b) => a - b);  // Sort numerically
    const res = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values to avoid repeated triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                
                // Move left and right pointers to avoid duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;  // Increase sum by moving left pointer to the right
            } else {
                right--; // Decrease sum by moving right pointer to the left
            }
        }
    }ŸŸ

    return res;
};


const arr = [-1,0,1,2,-1,-4];

console.log(threeSum(arr))

