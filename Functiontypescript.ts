function greet():void{
    console.log("Hello world")
}

greet()


function addition(a:number,b:number):void{
    console.log(a+b)
}

addition(35,78)


function substraction(c:number,d:number):number{
    
    let result=d-c
    return result
}

console.log(substraction(20,30))

function throwError(message:string):never{     //for exception throw, use the type never--for a function that goes on infinite loop or having error
      throw new Error(message)
}
throwError("Something went wrong")