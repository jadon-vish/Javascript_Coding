const arr= [1,2,3,4,5,"sachivji","pradhanji"]
//can also create by constructor
const cars = new Array("toyota","maruti","honda")

// changing an element

// arr[5]="avisek sir"
// console.log(arr);

// Array methods :

// length:

console.log("length",arr.length);

//toString

console.log("toString",arr.toString());

//join - similar to toString but can specify the seperator

console.log("join",arr.join(".."));

//push - add at the end

arr.push("prahlad","sahayak")

console.log("after push",arr);

//pop - remove element from end

arr.pop()

console.log("after popoing",arr);

// shift , unshift

// shift - removes first element and shifts the indexxes of all the array elements

let shiftEl = arr.shift()

console.log("shift",shiftEl , "shifted array",arr);

arr.unshift(1)

console.log("unshift",arr);

//merging of arrays :
//concat
let newArr= ["vidhayak","bhushan","binod"]
let newPpl=["DM Madam","BDO sir"]

let combineArr=arr.concat(newArr,newPpl)

console.log("concat",combineArr);

// spread operator

let combineNewAr= [...arr,...newArr,...newPpl]

// flat - multi -d array to 1-d array

let multiDArr= [1,2,[3,4,[5,6]],6,[8,9]]

console.log("flat",arr.flat());

// splice or slice

//slice():
let sliced=arr.slice(1,5)
console.log("sliced",sliced , "original",arr);

//splice - changes original array

let splicedArr= arr.splice(1,4)

console.log("splice",splicedArr , "original",arr);

// searching : 
//indexof(item,start) , -1 if not found

console.log("indexof",combineNewAr.indexOf("binod",2));

//lasindexOf(item,start)

//includes(item) - includes NaN as well

console.log("includes", combineNewAr.includes("sachivji"));

//finc(function)

let findeles= arr.find(function(value , index , array){
   return value > 1
})

//console.log("find",findeles);

// sortings

let arsort= [2,56,12,34,45,78,39,40]

console.log("sort",arsort.sort((a,b)=>{
    return a-b
}));