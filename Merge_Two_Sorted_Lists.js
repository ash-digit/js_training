class ListNode {
    constructor(val, next = null){
        this.val = val;
        this.next = next
    }
}

const node3 = new ListNode(3)
const node2 = new ListNode(2, node3)
const head1 = new ListNode(1,node2) // First heat
console.log(JSON.stringify(head1), "<------head1")
const node33 = new ListNode(4)
const node22 = new ListNode(3, node33)
const head2 = new ListNode(1,node22) // Second head
console.log(JSON.stringify(head2), "<------head2")

var mergeTwoLists = function(l1, l2){
    let curr = new ListNode()
    const dummy = curr;
    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if(l1){
        curr.next = l1;
    }
    if(l2) {
        curr.next = l2;
    }
    return dummy.next
}
const res = mergeTwoLists(head1, head2)
// console.log(JSON.stringify(res))