let employee={
    fname:"Anu",
    lname:"mohan",
    age:29,
    fullname:function(){
        return this.fname + " " +this.lname
    }
}
console.log("Firstname: "+employee.fname)
console.log("Lastname: "+employee.lname)
console.log(employee.fullname())

//bracket notation
console.log("Lastname:",employee['Lastname'])

//adding a new property-gender
employee.gender="Female"
console.log("Gender is ",employee.gender)

//removing a property
delete employee.gender
console.log("Gender is ",employee.gender)

//loop through all properties of objects
for(let key in employee){
    if(typeof employee[key]=="function"){
        console.log(key + ":",employee[key]())
    }
    else{
        console.log(key +":",employee[key])
    }

}