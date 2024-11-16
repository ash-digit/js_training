// var mergeTwoLists = function(list1, list2) {
//     const spliced = list1.concat(list2)
//     return spliced.sort((a, b)=>{return a - b})
// };

// const nums1 = [1,2,4]
// const nums2 = [1,3,4]

// console.log(mergeTwoLists(nums1, nums2))

class LinkedList {
    constructor(value, next = null){
        this.value = value;
        this.next = next
    }
}
// [1,2,3]
// [1,3,4]
// ----->>> [1,1,2,3,3,4]

const node3 = new LinkedList(3)
const node2 = new LinkedList(2, node3)
const head1 = new LinkedList(1,node2)

const node33 = new LinkedList(4)
const node22 = new LinkedList(3, node33)
const head2 = new LinkedList(1,node22)

let current1 = head1;
let current2 = head2;
while(current1 !== null){
    console.log(current1.value)
    current1 = current1.next
}