
function maxSubArrayLength(arr, k) {
    let left = 0, maxLength = 0, sum = 0;
    for (let right = 0; right < arr.length; right++) {        
        sum += arr[right]

        if (sum > k) {
            console.log("sum", sum);
            sum = sum - arr[left];
            console.log("sum1", sum);
            left++;
        }
        else{
        maxLength = Math.max(maxLength, right - left + 1);
        console.log("maxLength", maxLength);
    }
    return maxLength;
 }
}
let arr = [1, 3, 5, 7, 9, 1, 12, 15]
let k = 20;
console.log(" max Sub Array length", maxSubArrayLength(arr, k));