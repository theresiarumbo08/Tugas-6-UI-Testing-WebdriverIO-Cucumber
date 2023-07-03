Feature: Search category

        Background:
            Given I am on the login page

        Scenario Outline: As a user, I search new category
             When I login with email theresiatoko@gmail.com and password test123
              And I click button login
             Then I must navigate to dashboard page
             When I click on the "Kategori" menu
              And I click on the search button
              And I enter <categoryName> in the search field
             Then I should see the search results for <categoryName>
             

        Examples:
                  | categoryName |
                  | test         |
