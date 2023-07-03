Feature: Testing the login functionality

        Background:
            Given I am on the login page

        Scenario Outline: As a user, I cannot login with invalid credentials
             When I login with email <email> and password <password>
              And I click button login
             Then I should see a flash message saying <message>

        Examples:
                  | email                  | password  | message                            |
                  | theresiatoko@gmail.com | test12345 | Kredensial yang Anda berikan salah |

        Scenario Outline: As a user, I can login with valid credentials
             When I login with email <email> and password <password>
              And I click button login
             Then I must navigate to dashboard page

        Examples:
                  | email                  | password |
                  | theresiatoko@gmail.com | test123  |
