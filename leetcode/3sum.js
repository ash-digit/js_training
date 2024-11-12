var threeSum = function(nums) {
    const sorted = nums.sort();
    const res = [];

    for(let i = 0; i < sorted.length; i++){
        for(let j = 1; j < sorted.length; j++){
            for(let k = sorted.length; k > 0; k--){
                let temp = (sorted[i]) + (sorted[j] + ((sorted[k])));
                let tempArr = [];
                if(temp === 0){
                    tempArr.push(sorted[i])
                    tempArr.push(sorted[j])
                    tempArr.push(sorted[k])
                    for(let l = 0; l < res.length; l++){
                        
                    }
                    res.push(tempArr)
                }
            }
        }
    }
    return(res)
};


const arr = [-1,0,1,2,-1,-4];

console.log(threeSum(arr))

