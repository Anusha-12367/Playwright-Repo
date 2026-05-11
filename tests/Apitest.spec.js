import {test,expect} from '@playwright/test'
import { request } from 'node:http'

test('Get response user creation',async({request})=>
{
         const response=await request.get('https://jsonplaceholder.typicode.com/users')//a req is send to sample api
         expect(response.ok()).toBeTruthy()//checks whether response is 200/ok 
         const body=await response.json()//response is converting to json format
         console.log(body)
         expect(body.length).toBeGreaterThan(0)//to return no of users,atleast 1 user must be there in the api body
})
test('Post request-create user',async({request})=>{
    const response=await request.post('https://jsonplaceholder.typicode.com/users',{
        data:{
            name:'anusha',
            email:'anushamohan1@gmail.com'
        }
    })
    expect(response.status()).toBe(201)
    const respbody=await response.json()
    console.log(respbody)
    expect(respbody.name).toBe('anusha')//body validation
})

test.only('Patch request-update user',async({request})=>{
        const response=await request.patch('https://jsonplaceholder.typicode.com/users/11',{
            data:{
                email:'anusha123@gmail.com'
            }
        })
        expect(response.status()).toBe(200)
        const respbody=await response.json()
    console.log(respbody)
    expect(respbody.email).toBe('anusha123@gmail.com')//body validation

})

test('Put-entire user update',async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/users/10',{
        data:{
            "id": 11,
    "name": "Alementina DuBuque",
    "username": "joriah.Stanton",
    "email": "tey.Padberg@karina.biz",
    "address": {
      "street": "yattie Turnpike",
      "suite": "uuite 198",
      "city": "eebsackbury",
      "zipcode": "91428-2261",
      "geo": {
        "lat": "-48.2386",
        "lng": "77.2232"
      }
    },
    "phone": "524-648-3804",
    "website": "rmbrose.net",
    "company": {
      "name": "Hyyyeger LLC",
      "catchPhrase": "Centralised empowering task-force",
      "bs": "Taarget end-to-end models"
        }

        }
    })    

            expect(response.status()).toBe(200)
             const respbody=await response.json()
    console.log(respbody)

})


test('Delete-entire user update',async({request})=>{
    const response=await request.delete('https://jsonplaceholder.typicode.com/users/10',{

    })

                expect(response.status()).toBe(200)

})
