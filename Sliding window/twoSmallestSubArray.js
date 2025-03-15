
function smallestSubArray(arr, target) {
    let windowStart = 0;
    let windowSum = 0;
    let minLength = Infinity;
    let subArray = [];
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        while (windowSum >= target) {
            if (windowEnd - windowStart + 1 < minLength) {
                minLength = windowEnd - windowStart + 1;
                subArray = [windowStart, windowEnd];
            }
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return subArray;
}






let arr = [2,3,1,2,4,3];
let target = 7;