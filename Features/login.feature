
Feature:Login functionality       
Scenario: Valid login             
Given user is on login page       
When user enters valid username and password
Then user should see inventory page

Scenario:Invalid login
Given user is on login page
When user enters invalid username "standard_user1" and  password "secret_sauce1"
Then user should see error message