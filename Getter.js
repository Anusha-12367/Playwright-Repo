class Person{
    age=25
    //getter method
    get location(){
        return "India"
    }
    constructor(fname,lname){
        this.fname=fname
        this.lname=lname
    }
    fullname(){
        console.log(this.fname+" "+this.lname)
    }
}
let person=new Person()
console.log(person.age)
console.log(person.location)
person=new Person("Anu","Minnu")
person.fullname()
let person1=new Person("Suraj","Sajeer")
person1.fullname()