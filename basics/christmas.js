const today= new Date()

console.log(today.getTime());
const cmas_date=new Date(2024,11,25)

console.log(Math.ceil((cmas_date-today)/(1000*60*60*24)) ,"days");