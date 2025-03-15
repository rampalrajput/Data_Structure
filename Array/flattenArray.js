

function flatternArray(arr, result=[]){

    arr.forEach((element) =>{
        if(Array.isArray(element)){
            flatternArray(element, result);
        }else{
            result.push(element);
        }
    })
    return result;
}

let arr = [1,2,3,4,[3,4],[5,6,7,[1,2,3,4,5,6,6,8,9,0],8],5,6,7,8];
console.log(' flattern array', flatternArray(arr));