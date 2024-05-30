// for of

const arr = [1,2,3,4,5]

// for (const val of arr) {
//     console.log(val);
// }

const greeting = "Hello world"

// for (const greet of greeting) {
//     console.log(greet);
// }


// Maps - stores order of insertion , no duplicate keys

const map=new Map()
map.set("IN","India")
map.set("CN","Canada")
map.set("FR","France")
map.set("IN","India")
//console.log(map);

// for (const [key,value] of map) {
//     console.log(key ,"-" ,value);
// }

const games={
    game1:"NFS",
    game2:"Fifa",
    gane3:"COD"
}

for (const [key,value] of games) {
    console.log(key ,"-" ,value);
}

