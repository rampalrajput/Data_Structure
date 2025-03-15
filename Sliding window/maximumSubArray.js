
function maximumSubArray(arr, k) {

    let maxSum = 0;
    let windowSlidPointer = 0;

    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    
    for (let i = k; i < arr.length; i++) {
        let sum = maxSum + arr[i] - arr[windowSlidPointer];
        if (sum > maxSum) {
            maxSum = sum
        }
        windowSlidPointer++;
    }
    return maxSum;
}

let arr = [1, 2, 3, 5, 1, 3]
let k = 3;
console.log(maximumSubArray(arr, k));