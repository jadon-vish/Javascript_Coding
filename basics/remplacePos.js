function replaceChars(str){
    return `${str[str.length-1]}${str.substr(1,str.length-2)}${str[0]}`
}

console.log(replaceChars("Vishesh"));