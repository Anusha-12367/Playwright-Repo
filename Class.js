class Student{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    detail1(){
        console.log("The student name is " + this.name)
    }
    detail2(){
        console.log("The student age is "+ this.age)
    }
}
const stud=new Student("Anu",21)
stud.detail1()
stud.detail2()