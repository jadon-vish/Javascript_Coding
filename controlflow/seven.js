const mynum = [1,2,3,4,5,6,7,8,9,10]

//let newnums=mynum.map((num)=>num+10)

//chaining

let newnums = mynum
                .map((num)=>num*10)
                .map((num)=>num+1).filter((num)=> num > 30)

console.log(newnums);