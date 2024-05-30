// reduce 

//const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
//   );

const mynums=[1,2,3]

const mytotal = mynums.reduce(function(acc,curval){
    console.log(`acc:${acc} , curval:${curval}`);
    return acc+curval
},3)

//console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalSum=shoppingCart.reduce((acc,currval)=>acc+currval.price,0)

console.log(totalSum);


