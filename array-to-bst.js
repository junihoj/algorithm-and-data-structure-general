// function arrayToBst(nums){
//     //get the middle number of the array
//     let mid = Math.floor(nums.length/2);
//         if(nums.length < 1){
//             return null;
//         }else if(nums.length >1){
//             return{
//                 root:nums[mid],
//                 left: sortedArrayToBST(nums.slice(0, mid)),
//                 right: sortedArrayToBST(nums.slice(mid+1, nums.length))
//             }
//         }else{
//             return{
//                 root:nums[mid],
//                 left: null,
//                 right: null
//             }
//         }
// }

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    sortedArrayToBST(nums) {
        // code here
        //get the middle number of the array
        if (!nums.length) return null;
    
        const mid = Math.floor(nums.length / 2);
        const root = new Node(nums[mid]);
        
        // subtrees are BSTs as well
        root.left = this.sortedArrayToBST(nums.slice(0, mid));
        root.right = this.sortedArrayToBST(nums.slice(mid + 1));
        
        return root;
    }
    
    
}