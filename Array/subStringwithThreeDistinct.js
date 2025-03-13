/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let count = 0
    for (let i = 0; i < s.length - 2; i++) {
        let goodstring = true;
        let newSubString = s.substring(i, i + 3);
        let map = new Map();
        for (let j = 0; j < newSubString.length; j++) {
            map.set(newSubString.charAt(j), (map.get(newSubString.charAt(j)) || 0) + 1);
            if (map.get(newSubString.charAt(j)) > 1) {
                goodstring = false;
            }
        }

        if (goodstring === true) {
            count = count + 1;
        }
    }
    return count;
};
let s = "xyzzaz"
console.log(" countGoodSubstrings", countGoodSubstrings(s));