// Js objects store multiple values in key value pairs called properties. Keyed collections of data.

const mySym = Symbol("key1")
const JssUser={
    name:"Vishesh",
    lname:"Jadon",
    mail:"v@j.com",
    course:"JS full",
    "age":27,
    [mySym]:"mykey111",
    location:"Gwalior",
    fullname:function(){
        console.log(this.name+" "+this.lname);
    }
}

console.log(JssUser.fullname());

JssUser.name="Vaibhavi"

console.log(JssUser.fullname());
console.log(JssUser["age"]);
JssUser.salary=1000000

console.log(JssUser);

delete JssUser.course

console.log(JssUser);

// copying , cloning , etc

let newJsuser= JssUser  //copy reference

newJsuser.location="Indore"

//console.log(JssUser);

// duplicate an object : 

let jsuser1 = {...JssUser}

jsuser1.age=37

console.log(JssUser);