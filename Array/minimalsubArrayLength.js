/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, arr) {

    let left=0, sum =0, minLength = 0;
   
    for(let right=0;right < arr.length; right++){
   
        sum += arr[right]

        minLength = minLength + 1; 
   
        while(sum > target ){
           sum -= arr[left]
           left++
           minLength--;
        }
      
    }
    if(sum === target && left === arr.length){
       minLength = minLength + 1;
}
    if(sum < target && left === 0){
       minLength = 0
    }
    return minLength;
       
   };

   let arr = [1,2,3,4,5]
   console.log(" minimumsubArray",minSubArrayLen(11,arr)); 