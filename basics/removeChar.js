function removeChar(str,pos){
    return `${str.substr(0,pos)}${str.substr(pos+1,str.length)}`
}

console.log(removeChar("Vishesh",5));