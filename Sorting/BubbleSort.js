
function bubbleSort(arr){

    for(let i=0;i <arr.length -1 ;i++){
                                        
        for(let j=i+1; j<arr.length;j++){

            if(arr[i] > arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp
            }
        }
    }
    return arr;
}

let arr = [2,1,12,4,5,67,0];
console.log(" Bubble sort", bubbleSort(arr))
