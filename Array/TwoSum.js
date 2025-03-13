/*    
Two Sum - LeetCode 1
problem : Given an array and a target return indices of the two numbers that
up to target element.
*/

function twoSum(arr, target){
 let map = new Map();

 for(let i=0;i<arr.length;i++){

    let diff = target - arr[i];
    
    if(map.has(diff)){
        return [diff, arr[i]];
    }
    map.set(i,arr[i]);
 }
}

let arr = [1,2,3,4,6,8,9,8,3,4]
let target = 5
console.log(twoSum(arr, target));


