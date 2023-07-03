Feature: Add category

        Background:
            Given I login with email theresiatoko@gmail.com and password test123

        Scenario Outline: As a user, I add a new category
             When I click on the "Kategori" menu
              And I click on the button
              And I enter the category name as <categoryName> and description as <description>
              And I click button to save
             Then I must see a successful message
             

        Examples:
                  | categoryName | description |
                  | sayuran      | sayur hijau |
                  
