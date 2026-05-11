Feature:End-to-End functionality
@EndtoEnd       
Scenario: Add product to cart and complete checkout process            
Given user is on login page to log in       
When user enters valid username and password
Then user should see inventory page
Then user should add a product to cart
Then user verifies the product in the cart
Then user completes the checkout  