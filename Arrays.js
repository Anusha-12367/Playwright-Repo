let num=[10,20,30,40]
console.log(num)

let num1=Array(1,2,3,4)
console.log(num1)

let num2=new Array(20,30,40,50)
console.log(num2)

let num3=Array(3)
console.log(num3)

num3[0]=2
num3[1]=3
num3[2]=4
console.log(num3)

num3.push(10)
console.log(num3)

let flower=[]
flower.push("Rose")
flower.push("Jasmin")
flower.push("Hibiscus")
flower.push("Lilly")
console.log(flower)

let filtered=num3.filter(n=>n>3)
console.log(filtered)