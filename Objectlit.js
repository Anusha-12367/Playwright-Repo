const student={
    name:"anusha",
    rollno:2,
    detail:function(){
        console.log("This is student detail")
    }
}
student.detail()
console.log(student.name+" "+student.rollno)

//after ES6 version, short-hand method

const employee={
    emp_id:1234,
    emp_name:"Sunny",
    details(){         //short-hand method
        console.log("Emp name is "+this.emp_name)
    }
}
employee.details()