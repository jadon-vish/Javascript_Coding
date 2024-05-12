function swapeven(num){
    if(num.toString().length%2==0){

        let newNum="";
        for(let i=0;i<num.toString().length;i+=2){
            let a= num.toString()[i];
            let b=num.toString()[i+1];
            newNum=newNum+b+a;
        }
        return Number(newNum)
    }
    else{
        return false
    }
}

console.log(swapeven(156780));