


function secondMinimum(arr){

let min = Infinity;
let secondMin = Infinity;

for(let i=0; i< arr.length;i++){

    if(arr[i] < min){
        secondMin = min;
        min = arr[i];
    }
    else if(arr[i] < secondMin && arr[i] !== min){
        secondMin = arr[i];
    }

}
 return [min,secondMin];
}
let arr = [1,2,3,4,5,6,7]
console.log('second minimum', secondMinimum(arr));