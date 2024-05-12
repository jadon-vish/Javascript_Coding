function toCelcius(ftemp){
  return (5/9)*(ftemp-32)
}

function toFar(ctemp){
   return ((9*ctemp)/5)+32
}

console.log(toCelcius(45));