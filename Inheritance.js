class Animal{
    constructor(name){
        this.name=name
    }
    sound(){
        console.log(this.name+" "+"makes a sound")
    }
}
class Dog extends Animal{
    constructor(name,bread){
        super(name)
        this.bread=bread
    }
    breadType(){
        console.log(this.name+" "+"named"+" "+this.bread)
    }
}
let dog=new Dog("Tobby","Shigzu")
dog.sound()
dog.breadType()