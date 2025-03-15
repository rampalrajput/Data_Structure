function smallestSubArray(arr, target) {
   
    let left = 0;
    let minLen = Infinity;
    let sum = 0;
    let minSubArray = [];

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum >= target) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minSubArray = arr.slice(left, right + 1);
            }
            sum -= arr[left];
            left++;
        }
    }

    return { length: minLen, subArray: minSubArray };
}

let arr = [1, 3, 5, 7, 8, 10];
let target = 11;
console.log("smallest subArray",smallestSubArray(arr, target));
