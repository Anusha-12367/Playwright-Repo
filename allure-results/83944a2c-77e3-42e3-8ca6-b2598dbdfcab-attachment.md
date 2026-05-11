# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LogDemoblaze.spec.js >> Login in home screen
- Location: tests\LogDemoblaze.spec.js:6:1

# Error details

```
TypeError: loginpage.goto is not a function
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import {LoginDemoblaze} from '../Pages/LoginDemoblaze' //import class from LoginpageMain from Page(same folder aanel single dot or double dot)
  3  | 
  4  | import validLogindata from '../Utils/Testdataproject.json' with {type:'json'};  
  5  | 
  6  | test('Login in home screen',async({page})=>{
  7  |      const loginpage=new LoginDemoblaze(page)
> 8  |         await loginpage.goto()
     |                         ^ TypeError: loginpage.goto is not a function
  9  |         const user=validLogindata.username
  10 |         const pass=validLogindata.password
  11 |         await loginpage.login(user,pass) 
  12 | })
```