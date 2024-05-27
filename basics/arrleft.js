const arr=[2,3,12,56,23,78,89,45,34,76,12]

function atLeft(ele){
    let i=arr.indexOf(ele);
    return arr.slice(0,i)
}

function atRight(ele){
    let i=arr.indexOf(ele);
    return arr.slice(i+1,arr.length-1)
}

console.log(atRight(23));