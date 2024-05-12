function testPy(str){
    if(str.startsWith("Py")){
        return str
    }
    else{
        return `Py${str}`
    }
}

console.log(testPy("lynon"));