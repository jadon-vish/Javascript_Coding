function countVowel(str){
    let count=0;
    for(let i in str.toLowerCase()){
        if(["a","e","i","o","u"].includes(str[i])){
            count++
        }
    }

    return count
}

console.log(countVowel("Vishesh"));