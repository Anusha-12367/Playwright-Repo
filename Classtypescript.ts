class TypescriptSample{      //class declaration

    name:string                 //global variable
    constructor(name:string){
    this.name=name         //assigning local to global
   }
   greets():string{              //class il function ennu use cheyyanda
     return "Hello"+this.name
   }

    
}
const obj=new TypescriptSample("Greetings")
const res=obj.greets()
console.log(res)