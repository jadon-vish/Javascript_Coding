const arr=[2,3,12,56,23,78,89,45,34,76,12]

function max(arr){
    return arr.sort(function(a,b){
        return a-b
    })
}

function min(arr){
    return arr.sort(function(a,b){
        return b-a
    })
}

console.log(max(arr)[arr.length-1]);
console.log(min(arr)[arr.length-1]);