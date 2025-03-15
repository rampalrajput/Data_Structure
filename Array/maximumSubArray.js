
function maximumSubArray(arr, k) {

    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    for (let i = k; i < arr.length; i++) {

        let sum = maxSum + arr[i];
        if (sum > maxSum) {
            maxSum = sum
        }
    }
    return maxSum;

}

let arr = [1, 2, 3, 5, 1, 3]
let k = 3;
console.log(" maximum sub array", maximumSubArray(arr, k));