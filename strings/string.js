let s= "string1"
let s1='string1'
let s2=new String("string1")
let s3 =  `string1`

let str = "Welcome to javascript course"

//important methods of stirng

console.log("length",str.length); // property

//charAt()

console.log("charat",str.charAt(11));

//charCodeAt() - UTF-16

console.log("charCodeAt ",str.charCodeAt(11));

//at() - allows negative indexes as well

console.log("at ", str.at(-4));

// slice(start,end)

console.log("slice",str.slice(-10,-3));

// substring(start,end) - start<0 treated as 0

console.log("substring ",str.substring(4,12));

// substr(start,length)- if start<0 , position counted from end of that string

console.log("substr ",str.substr(-3));

//toUpperCase , toLoserCase , concat

//trim - removes whitespaces - trimstart , trimend

//pad - padStart , padEnd

// indexOf() - position of first occurrence else -1 , accepts position parameter

console.log("indexof",str.indexOf("j"));

//lastIndexOf() - last occurence else -1 , accepts position parameter

console.log("lastIndexOf", str.lastIndexOf("t"));

//search() , match() , matchAll() , startsWith() , endsWith() ,includes()