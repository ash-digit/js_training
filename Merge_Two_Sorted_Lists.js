var mergeTwoLists = function(list1, list2) {
    const spliced = list1.concat(list2)
    return spliced.sort((a, b)=>{return a - b})
};

const nums1 = [1,2,4]
const nums2 = [1,3,4]

console.log(mergeTwoLists(nums1, nums2))