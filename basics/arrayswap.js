function swapArray(arr){
    if(arr.length%2==0){
        for(let i=0;i<arr.length/2;i++){
            [arr[i],arr[i+arr.length/2]]=[arr[i+arr.length/2],arr[i]]
        }
        return arr
    }
    else{
        return false
    }
}

console.log(swapArray([1,2,3,4,5,6]));