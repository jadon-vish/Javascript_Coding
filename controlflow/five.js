const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function(item){
//     console.log(item);
// })

//forEach does'nt return any value

const values = coding.forEach(function(item){
    //console.log(item);
    return item
})

// console.log(values);

const mynums=[1,2,3,4,5,6,7,8,9,10]

const getnums=mynums.filter((num)=> { return num>4})

const newnums = []

mynums.forEach((num)=> {
    if(num>4){
        newnums.push(num)
    }
})

//console.log(newnums);
