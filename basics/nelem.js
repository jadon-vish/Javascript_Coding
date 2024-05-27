const arr=[2,3,12,56,23,78,89,45,34,76,12]
function nElement(arry,n){
    let dum = arry.find(function(value, index, arry){
        if(index%2 == 0){
            console.log(index);
        }
       return index%n==0
    })
    return dum
}

console.log(nElement(arr,3));